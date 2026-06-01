'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';
import { ArrowRight, ChevronRight, Home, Mail, MapPin, Users, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-x-hidden">
      {/* Main Hero Banner */}
      <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-blue-950 md:min-h-[80vh]">
        {/* Background Image */}
        <img
          src="/images/hero/ubsi-campus-margonda-4k.png"
          alt="Gedung Universitas Bina Sarana Informatika Margonda"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061b2d]/50 via-[#061b2d]/65 to-[#020a13]/90" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Decorative glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container relative z-10 w-full max-w-full px-4 text-center text-white md:px-6">
          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur-sm">
            <Users className="h-3.5 w-3.5" />
            <span>Organisasi Mahasiswa TI</span>
            <span className="text-white/40">|</span>
            <span>UBSI Margonda</span>
          </div>

          {/* Main Title */}
          <h1 className="mx-auto max-w-[20rem] text-balance break-words font-serif text-4xl font-bold leading-[1.1] sm:max-w-[36rem] sm:text-5xl md:max-w-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-5 max-w-[20rem] text-sm leading-7 text-white/85 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg md:leading-8">
            {siteConfig.fullName} yang berfokus pada solidaritas, pengembangan
            potensi, dan program kerja berdampak untuk mahasiswa Teknologi Informasi.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group w-full max-w-[16rem] bg-white text-blue-700 shadow-lg shadow-black/20 hover:bg-blue-50 sm:w-auto"
            >
              <Link href="/tentang">
                Kenali HMTI
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full max-w-[16rem] border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-blue-700 sm:w-auto"
            >
              <Link href="/kolaborasi">
                <Sparkles className="mr-2 h-4 w-4" />
                Ajukan Kolaborasi
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Indicators Bar */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container px-4 md:px-6">
            <div className="flex w-full max-w-full flex-wrap items-center gap-3 overflow-hidden rounded-t-xl bg-black/50 px-5 py-4 text-xs text-white shadow-xl backdrop-blur-md sm:text-sm md:w-max md:px-6">
              <span className="inline-flex items-center gap-2 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Aktif
              </span>
              <span className="text-white/30">|</span>
              <Link href="/" className="inline-flex items-center gap-1 hover:text-blue-200">
                <Home className="h-4 w-4" />
                Beranda
              </Link>
              <ChevronRight className="h-4 w-4 text-white/30" />
              <span className="min-w-0 truncate font-medium text-white/90">
                {siteConfig.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Bar */}
      <div className="border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
        <div className="container grid gap-4 px-4 py-5 md:grid-cols-3 md:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Kampus
              </p>
              <p className="max-w-[18rem] break-words text-sm text-muted-foreground sm:max-w-none">
                {siteConfig.social.location}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Kontak
              </p>
              <p className="max-w-[18rem] break-all text-sm text-muted-foreground sm:max-w-none">
                {siteConfig.social.email}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Fokus
              </p>
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