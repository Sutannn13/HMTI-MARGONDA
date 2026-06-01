'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { Instagram, Mail, MapPin, ArrowRight, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100/50" />
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-white/80 shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
                  <img
                    src="/images/logo/hmti-margonda.png"
                    alt="Logo HMTI UBSI Margonda"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">HMTI UBSI</p>
                  <p className="text-xs text-muted-foreground">Margonda</p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {siteConfig.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 flex items-center justify-center text-muted-foreground hover:text-[#0067b1] hover:bg-[#0067b1]/10 transition-all duration-200 shadow-sm"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 flex items-center justify-center text-muted-foreground hover:text-[#0067b1] hover:bg-[#0067b1]/10 transition-all duration-200 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tentang */}
            <div>
              <h4 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0067b1]" />
                Tentang HMTI
              </h4>
              <ul className="space-y-3">
                {footerNavigation.tentang.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-[#0067b1] transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div>
              <h4 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0067b1]" />
                Program Kerja
              </h4>
              <ul className="space-y-3">
                {footerNavigation.program.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-[#0067b1] transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-semibold text-foreground mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0067b1]" />
                Kontak
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0067b1]/70" />
                  <span>{siteConfig.social.instagram}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0067b1]/70" />
                  <span>{siteConfig.social.email}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0067b1]/70" />
                  <span>{siteConfig.social.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-blue-100/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-red-400" />
                <span>
                  &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </span>
              </div>
              <div className="flex gap-6">
                <Link
                  href="/kontak"
                  className="text-sm text-muted-foreground hover:text-[#0067b1] transition-colors duration-200"
                >
                  Kontak
                </Link>
                <Link
                  href="/kolaborasi"
                  className="text-sm text-muted-foreground hover:text-[#0067b1] transition-colors duration-200"
                >
                  Kolaborasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
