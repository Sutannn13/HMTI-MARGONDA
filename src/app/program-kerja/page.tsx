'use client';

import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { programsData, programCategories, type Program } from '@/data/programs';
import { cn } from '@/lib/utils';
import { Code, Briefcase, Heart, Users, Palette, Camera, Cpu, Trophy, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
  'akan-datang': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'berlangsung': 'bg-green-100 text-green-700 border-green-200',
  'terlaksana': 'bg-blue-100 text-blue-700 border-blue-200',
};

const statusLabels = {
  'akan-datang': 'Akan Datang',
  'berlangsung': 'Berlangsung',
  'terlaksana': 'Terlaksana',
};

const categoryColors = {
  akademik: 'bg-blue-500',
  sosial: 'bg-green-500',
  teknologi: 'bg-purple-500',
  internal: 'bg-orange-500',
  eksternal: 'bg-pink-500',
  unggulan: 'bg-yellow-500',
};

export default function ProgramKerjaPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms = activeCategory === 'all'
    ? programsData
    : programsData.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Program Kerja"
        subtitle="Proker HMTI"
        description="Berbagai program kerja yang dijalankan HMTI UBSI Margonda untuk memberikan dampak positif."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {programCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPrograms.map((program, index) => {
              const Icon = iconMap[program.icon] || Code;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0',
                      categoryColors[program.category]
                    )}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={cn(
                          'text-xs px-2 py-1 rounded-full border',
                          statusColors[program.status]
                        )}>
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
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        {program.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(program.date).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                        {program.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {program.location}
                          </span>
                        )}
                      </div>
                      {program.impact && (
                        <p className="mt-3 text-sm text-primary font-medium">
                          Impact: {program.impact}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Tidak ada program kerja dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}