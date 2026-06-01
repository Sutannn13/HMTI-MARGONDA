'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake, Sparkles } from 'lucide-react';

export function CollaborationCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0067b1] via-[#0077cc] to-[#0088dd]" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Icon with glow */}
          <div className="relative mx-auto mb-8 inline-flex">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-white/80" />
            </div>
          </div>

          <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            Tertarik untuk Berkolaborasi?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/85">
            HMTI UBSI Margonda terbuka untuk kerja sama dengan kampus, komunitas,
            brand, dan stakeholder lainnya. Mari bersama menciptakan dampak positif
            bagi mahasiswa TI dan masyarakat.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group bg-white text-[#0067b1] hover:bg-blue-50 shadow-lg shadow-black/10">
              <Link href="/kolaborasi">
                Ajukan Kolaborasi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#0067b1] backdrop-blur-sm"
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Open for Partnership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span>Flexible Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-300" />
              <span>Student Community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
