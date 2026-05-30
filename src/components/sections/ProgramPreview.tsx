'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { programsData } from '@/data/programs';
import { ArrowRight, Code, Briefcase, Heart, Users, Palette, Camera, Cpu, Trophy } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Briefcase,
  Heart,
  Users,
  Palette,
  Camera,
  Cpu,
  Trophy,
};

const statusColors = {
  'akan-datang': 'bg-yellow-100 text-yellow-700',
  'berlangsung': 'bg-green-100 text-green-700',
  'terlaksana': 'bg-blue-100 text-blue-700',
};

const statusLabels = {
  'akan-datang': 'Akan Datang',
  'berlangsung': 'Berlangsung',
  'terlaksana': 'Terlaksana',
};

const categoryColors = {
  akademik: 'border-blue-200 bg-blue-50',
  sosial: 'border-green-200 bg-green-50',
  teknologi: 'border-purple-200 bg-purple-50',
  internal: 'border-orange-200 bg-orange-50',
  eksternal: 'border-pink-200 bg-pink-50',
  unggulan: 'border-yellow-200 bg-yellow-50',
};

export function ProgramPreview() {
  const featuredPrograms = programsData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Program Kerja"
          subtitle="Aktifitas & Kegiatan"
          description="Berbagai program kerja yang dijalankan HMTI untuk memberikan dampak positif."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredPrograms.map((program, index) => {
            const Icon = iconMap[program.icon] || Code;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 ${categoryColors[program.category]?.split(' ')[0]}`}>
                    <Icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[program.status]}`}>
                        {statusLabels[program.status]}
                      </span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {program.description}
                    </p>
                    {program.impact && (
                      <p className="text-xs text-primary font-medium">
                        Impact: {program.impact}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Link
            href="/program-kerja"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Lihat Semua Program Kerja
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}