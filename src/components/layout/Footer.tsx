'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <p className="font-bold text-foreground">HMTI UBSI</p>
                <p className="text-xs text-muted-foreground">Margonda</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tentang */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tentang HMTI</h4>
            <ul className="space-y-2">
              {footerNavigation.tentang.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Program Kerja</h4>
            <ul className="space-y-2">
              {footerNavigation.program.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.social.instagram}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.social.email}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.social.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/kontak"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kontak
              </Link>
              <Link
                href="/kolaborasi"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Kolaborasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}