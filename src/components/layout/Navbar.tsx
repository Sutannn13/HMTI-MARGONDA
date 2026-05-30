'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigationData, type NavItem } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const ListItem = ({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description?: string;
}) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {description && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        )}
      </Link>
    </NavigationMenuLink>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderNavItems = (items: NavItem[], isMobile = false) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isMobile && 'w-full justify-start'
              )}
            >
              {item.title}
              {isMobile && <ChevronDown className="ml-2 h-4 w-4" />}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.children?.map((child) => (
                  <ListItem
                    key={child.title}
                    title={child.title}
                    href={child.href!}
                    description={child.description}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }

      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href!}
              className={cn(
                navigationMenuTriggerStyle(),
                'text-sm font-medium transition-colors hover:text-primary'
              )}
            >
              {item.title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground">HMTI UBSI</p>
              <p className="text-xs text-muted-foreground">Margonda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {renderNavItems(navigationData)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/kolaborasi">Ajukan Kolaborasi</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">HMTI UBSI</p>
                    <p className="text-xs text-muted-foreground">Margonda</p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2">
                  {navigationData.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.title}
                        {item.children && (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Link>
                      {item.children && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 flex flex-col gap-2 py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href || '#'}
                                  onClick={() => setIsOpen(false)}
                                  className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <Button asChild className="w-full">
                  <Link href="/kolaborasi" onClick={() => setIsOpen(false)}>
                    Ajukan Kolaborasi
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}