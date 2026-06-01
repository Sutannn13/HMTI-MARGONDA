'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { visionMissionData } from '@/data/visionMission';
import { ArrowRight, Heart, Handshake, Lightbulb, TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Handshake,
  Lightbulb,
  TrendingUp,
};

export function AboutPreview() {
  return (
    <section id="profil-organisasi" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_0.95fr] lg:items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="border-l-4 border-blue-500 pl-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Profil Organisasi
              </p>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-5xl">
                Himpunan mahasiswa TI yang aktif, solid, dan berdampak.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 md:text-lg">
              <p>
                HMTI UBSI Margonda adalah wadah mahasiswa Teknologi Informasi
                untuk mengembangkan kemampuan, memperkuat solidaritas, dan
                menjalankan program kerja yang relevan dengan kebutuhan anggota
                maupun masyarakat.
              </p>
              <p>
                Website ini disiapkan sebagai ruang informasi resmi untuk
                memperkenalkan profil organisasi, visi misi, program kerja,
                dokumentasi kegiatan, serta jalur kolaborasi bagi kampus,
                komunitas, brand, dan pihak eksternal.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-blue-600">6</p>
                <p className="text-sm text-slate-500">Divisi organisasi</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-slate-500">Nilai utama HMTI</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-blue-600">1+</p>
                <p className="text-sm text-slate-500">Program berdampak per periode</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/visi-misi"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600"
              >
                Visi & Misi
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-sm"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-50">
                <img
                  src="/images/activities/hmti-ldk-group.jpeg"
                  alt="Anggota HMTI UBSI Margonda dalam kegiatan LDK"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Dokumentasi HMTI
                </p>
                <p className="mt-1 text-lg font-bold">Kegiatan kebersamaan dan LDK</p>
              </div>
            </div>

            {/* Values Section */}
            <div className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Nilai HMTI</h3>
                  <p className="text-sm text-slate-500">
                    Prinsip yang menjaga arah kegiatan organisasi.
                  </p>
                </div>
              </div>

              <div className="space-y-1 divide-y divide-slate-200/50">
                {visionMissionData.values.map((value, index) => {
                  const Icon = iconMap[value.icon] || Heart;
                  return (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{value.title}</h4>
                        <p className="text-sm leading-6 text-slate-600">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}