'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';
import { ArrowRight, ChevronRight, Home, Mail, MapPin } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-x-hidden">
      <div
        className="relative flex min-h-[66vh] items-center justify-center overflow-hidden bg-blue-950 md:min-h-[74vh]"
      >
        <img
          src="/images/hero/ubsi-campus-margonda-4k.png"
          alt="Gedung Universitas Bina Sarana Informatika Margonda resolusi tinggi"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061b2d]/55 via-[#061b2d]/65 to-[#020a13]/88" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent" />

        <div className="container relative z-10 w-full max-w-full px-4 text-center text-white md:px-6">
          <h1 className="mx-auto max-w-[18rem] text-balance break-words font-serif text-4xl font-bold leading-[0.95] sm:max-w-[34rem] sm:text-5xl md:max-w-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto mt-5 max-w-[19rem] text-sm leading-7 text-white/85 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg md:leading-8">
            {siteConfig.fullName} yang berfokus pada solidaritas, pengembangan
            potensi, dan program kerja berdampak untuk mahasiswa Teknologi Informasi.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group w-full max-w-[15rem] bg-white text-blue-700 hover:bg-blue-50 sm:w-auto"
            >
              <Link href="/tentang">
                Kenali HMTI
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full max-w-[15rem] border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-blue-700 sm:w-auto"
            >
              <Link href="/kolaborasi">Ajukan Kolaborasi</Link>
            </Button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container px-4 md:px-6">
            <div className="flex w-full max-w-full flex-wrap items-center gap-2 overflow-hidden bg-black/60 px-4 py-3 text-xs text-white shadow-lg backdrop-blur sm:text-sm md:w-max md:px-6">
              <span className="inline-flex items-center gap-2 font-semibold uppercase">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                You are here
              </span>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <Link href="/" className="inline-flex items-center gap-1 hover:text-blue-100">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <span className="min-w-0 truncate text-white/85">HMTI UBSI Margonda</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="container grid gap-4 px-4 py-5 md:grid-cols-3 md:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-xs font-semibold uppercase text-blue-700">Kampus</p>
              <p className="max-w-[18rem] break-words text-sm text-muted-foreground sm:max-w-none">
                {siteConfig.social.location}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-xs font-semibold uppercase text-blue-700">Kontak</p>
              <p className="max-w-[18rem] break-all text-sm text-muted-foreground sm:max-w-none">
                {siteConfig.social.email}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-xs font-semibold uppercase text-blue-700">Fokus</p>
              <p className="max-w-[18rem] break-words text-sm text-muted-foreground sm:max-w-none">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
