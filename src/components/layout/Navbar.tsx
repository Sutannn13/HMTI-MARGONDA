'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { navigationData, type NavItem } from '@/data/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X } from 'lucide-react';
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-sm focus:bg-white/10"
      >
        <div className="text-sm font-medium leading-none text-white/90">{title}</div>
        {description && (
          <p className="line-clamp-2 text-xs leading-snug text-white/50">
            {description}
          </p>
        )}
      </Link>
    </NavigationMenuLink>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger
              className={cn(
                'bg-transparent text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10',
                'backdrop-blur-sm transition-all duration-200 rounded-lg px-3 py-2 text-sm font-medium'
              )}
            >
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="backdrop-blur-xl">
              <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#0067b1]/95 border border-white/10 shadow-xl rounded-xl">
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
                'bg-transparent text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 backdrop-blur-sm transition-all duration-200 rounded-lg px-3 py-2 text-sm font-medium'
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
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'shadow-lg shadow-blue-900/10'
          : 'shadow-none'
      )}
    >
      {/* Glass Navbar */}
      <div
        className={cn(
          'border-b border-white/10 transition-all duration-300',
          scrolled
            ? 'bg-[#0067b1]/85 backdrop-blur-xl'
            : 'bg-[#0067b1]/70 backdrop-blur-md'
        )}
      >
        <div className="container flex min-h-[4rem] items-center justify-between px-4 py-2 md:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3 group">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src="/images/logo/hmti-margonda.png"
                alt="Logo HMTI UBSI Margonda"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold uppercase leading-tight text-white md:text-base">
                HMTI UBSI Margonda
              </p>
              <p className="hidden text-[10px] font-medium uppercase text-white/70 sm:block">
                Himpunan Mahasiswa Teknologi Informasi
              </p>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu className="backdrop-blur-sm">
              <NavigationMenuList className="gap-1">
                {renderNavItems(navigationData)}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="text-white hover:bg-white/10 hover:text-white transition-colors"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-[#0067b1] border-white/10 p-0">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10">
                      <img
                        src="/images/logo/hmti-margonda.png"
                        alt="Logo HMTI UBSI Margonda"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">HMTI UBSI Margonda</p>
                      <p className="text-xs text-white/60">
                        Himpunan Mahasiswa TI
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navigationData.map((item) => (
                      <div key={item.title}>
                        <Link
                          href={item.href || '#'}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between py-3 px-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <span>{item.title}</span>
                          {item.children && <ChevronDown className="h-4 w-4 text-white/50" />}
                        </Link>
                        {item.children && (
                          <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href || '#'}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 px-3 text-xs text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Footer CTA */}
                <div className="p-4 border-t border-white/10">
                  <Button asChild className="w-full bg-white text-[#0067b1] hover:bg-white/90">
                    <Link href="/kolaborasi" onClick={() => setIsOpen(false)}>
                      Ajukan Kolaborasi
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
