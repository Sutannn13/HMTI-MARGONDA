'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigationData, type NavItem } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, Instagram, Mail } from 'lucide-react';
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
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
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

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger
              className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white"
            >
              {item.title}
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
                'bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white'
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
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="hidden border-b border-white/10 bg-[#17313f] text-white md:block">
        <div className="container flex h-10 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4 text-xs text-white/80">
            <a
              href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              {siteConfig.social.instagram}
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.social.email}
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold uppercase text-white/80">
            <Link href="/kegiatan" className="hover:text-white">
              Kegiatan
            </Link>
            <Link href="/galeri" className="hover:text-white">
              Galeri
            </Link>
            <Link href="/kolaborasi" className="hover:text-white">
              Kolaborasi
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0067b1] text-white">
        <div className="container flex min-h-16 items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <span className="text-base font-black text-white">H</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold uppercase leading-tight text-white md:text-xl">
                HMTI UBSI Margonda
              </p>
              <p className="hidden text-xs font-medium uppercase text-white/75 sm:block">
                Himpunan Mahasiswa Teknologi Informasi
              </p>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>{renderNavItems(navigationData)}</NavigationMenuList>
            </NavigationMenu>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px]">
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                    <span className="text-base font-black text-white">H</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">HMTI UBSI Margonda</p>
                    <p className="text-xs text-muted-foreground">
                      Himpunan Mahasiswa TI
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col gap-2">
                  {navigationData.map((item) => (
                    <div key={item.title} className="border-b pb-2">
                      <Link
                        href={item.href || '#'}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-2 text-base font-semibold text-foreground hover:text-primary"
                      >
                        {item.title}
                        {item.children && <ChevronDown className="h-4 w-4" />}
                      </Link>
                      {item.children && (
                        <AnimatePresence>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-2 py-2 pl-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href || '#'}
                                  onClick={() => setIsOpen(false)}
                                  className="py-1 text-sm text-muted-foreground hover:text-primary"
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
