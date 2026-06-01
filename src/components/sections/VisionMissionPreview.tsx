'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { visionMissionData } from '@/data/visionMission';
import { Target, Users, FileText, ClipboardCheck, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Users,
  FileText,
  ClipboardCheck,
};

export function VisionMissionPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Visi & Misi"
          subtitle="Arah dan Tujuan"
          description="Visi dan misi HMTI UBSI Margonda untuk meningkatkan solidaritas dan memberikan dampak nyata."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
              Visi
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              &ldquo;{visionMissionData.vision.content}&rdquo;
            </p>
          </motion.div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-4">
            {visionMissionData.mission.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Target;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 h-16 w-16 -translate-y-6 translate-x-6 rotate-45 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center pt-4"
          >
            <Link
              href="/visi-misi"
              className="inline-flex items-center gap-2 text-blue-600 font-medium transition-colors hover:text-blue-800 group"
            >
              Lihat Selengkapnya di Halaman Visi & Misi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}