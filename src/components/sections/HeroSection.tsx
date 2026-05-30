'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Organisasi Mahasiswa TI
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                <span className="gradient-text">{siteConfig.name}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
              >
                {siteConfig.tagline}
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="glass rounded-xl p-4 text-center">
                <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Anggota Aktif</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Program Kerja</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <Lightbulb className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">6</p>
                <p className="text-xs text-muted-foreground">Divisi</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/tentang">
                  Kenali HMTI
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kolaborasi">Ajukan Kolaborasi</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">H</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">HMTI UBSI Margonda</h3>
                      <p className="text-sm text-muted-foreground">2024/2025</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Solidaritas</p>
                        <p className="text-xs text-muted-foreground">Kekompakan & saling mendukung</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Kolaborasi</p>
                        <p className="text-xs text-muted-foreground">Bekerja sama aktif</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Inovasi</p>
                        <p className="text-xs text-muted-foreground">Terus berinovasi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                        <span className="text-orange-600 text-sm font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Dampak</p>
                        <p className="text-xs text-muted-foreground">Fokus manfaat nyata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-300/30 rounded-full blur-2xl animate-pulse-slow" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  );
}