'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { visionMissionData } from '@/data/visionMission';
import { ArrowRight, Heart, Handshake, Lightbulb, TrendingUp, Users } from 'lucide-react';

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="border-l-4 border-blue-600 pl-5">
              <p className="mb-3 text-sm font-semibold uppercase text-blue-700">
                Profil Organisasi
              </p>
              <h2 className="max-w-3xl text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-5xl">
                Himpunan mahasiswa TI yang aktif, solid, dan berdampak.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
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

            <div className="grid gap-4 border-y py-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-blue-700">6</p>
                <p className="text-sm text-muted-foreground">Divisi organisasi</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">4</p>
                <p className="text-sm text-muted-foreground">Nilai utama HMTI</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-700">1+</p>
                <p className="text-sm text-muted-foreground">Program berdampak per periode</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/visi-misi"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                Visi & Misi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-t-4 border-blue-600">
              <img
                src="/images/activities/hmti-ldk-group.jpeg"
                alt="Anggota HMTI UBSI Margonda dalam kegiatan LDK"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/75">
                  Dokumentasi HMTI
                </p>
                <p className="mt-1 text-lg font-bold">Kegiatan kebersamaan dan LDK</p>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center bg-blue-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Nilai HMTI</h3>
                  <p className="text-sm text-muted-foreground">
                    Prinsip yang menjaga arah kegiatan organisasi.
                  </p>
                </div>
              </div>

              <div className="divide-y">
                {visionMissionData.values.map((value, index) => {
                  const Icon = iconMap[value.icon] || Heart;
                  return (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      className="flex gap-4 py-4"
                    >
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-foreground">{value.title}</h4>
                        <p className="text-sm leading-6 text-muted-foreground">
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
