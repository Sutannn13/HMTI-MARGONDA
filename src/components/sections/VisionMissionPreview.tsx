'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { visionMissionData } from '@/data/visionMission';
import { Target, Users, FileText, ClipboardCheck } from 'lucide-react';

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
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Visi
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {visionMissionData.vision.content}
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
                  className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}