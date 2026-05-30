'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { visionMissionData } from '@/data/visionMission';
import { ArrowRight, Heart, Handshake, Lightbulb, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Handshake,
  Lightbulb,
  TrendingUp,
};

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeader
              title="Tentang HMTI UBSI Margonda"
              subtitle="Profil Organisasi"
              description="Himpunan Mahasiswa Teknologi Informasi UBSI Margonda adalah organisasi kemahasiswaan yang berfokus pada pengembangan potensi dan program kerja berdampak."
              centered={false}
            />

            <div className="space-y-4">
              <p className="text-muted-foreground">
                HMTI UBSI Margonda hadir sebagai wadah untuk mahasiswa Teknologi Informasi
                dalam mengembangkan diri, berkolaborassi, dan memberikan dampak positif
                bagi masyarakat luas.
              </p>
              <p className="text-muted-foreground">
                Dengan semangat solidaritas dan inovasi, kami berkomitmen untuk
                menjalankan program kerja yang nyata dan bermanfaat.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/visi-misi"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Visi & Misi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {visionMissionData.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}