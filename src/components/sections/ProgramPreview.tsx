'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { programsData } from '@/data/programs';
import { ArrowRight, Code, Briefcase, Heart, Users, Palette, Camera, Cpu, Trophy, MapPin, Calendar } from 'lucide-react';

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

const statusConfig = {
  'akan-datang': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', label: 'Akan Datang' },
  'berlangsung': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Berlangsung' },
  'terlaksana': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', label: 'Terlaksana' },
};

const categoryConfig = {
  akademik: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  sosial: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
  teknologi: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  internal: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
  eksternal: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
  unggulan: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
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
            const status = statusConfig[program.status];
            const category = categoryConfig[program.category];

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200/80 hover:shadow-md hover:-translate-y-1"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rotate-45 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${category.bg} ${category.text} border ${category.border} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Tags Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.bg} ${status.text} ${status.border}`}>
                        {status.label}
                      </span>
                      <span className="text-xs text-slate-500 capitalize">
                        {program.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      {program.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {program.location}
                        </span>
                      )}
                      {program.date && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(program.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      )}
                    </div>

                    {/* Impact */}
                    {program.impact && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {program.impact}
                      </div>
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
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors group"
          >
            Lihat Semua Program Kerja
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}