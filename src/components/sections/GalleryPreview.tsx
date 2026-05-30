'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { galleryData } from '@/data/gallery';
import { EmptyImagePlaceholder } from '@/components/shared/EmptyImagePlaceholder';
import { ArrowRight, Calendar, Folder } from 'lucide-react';

export function GalleryPreview() {
  const featuredGalleries = galleryData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Galeri Kegiatan"
          subtitle="Dokumentasi"
          description="Dokumentasi berbagai kegiatan dan program kerja HMTI UBSI Margonda."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredGalleries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              {item.placeholder ? (
                <EmptyImagePlaceholder
                  className="aspect-[4/3] w-full group-hover:ring-2 group-hover:ring-primary/50 transition-all"
                  text={item.title}
                />
              ) : (
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                  <div className="flex items-center gap-3 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Folder className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Lihat Semua Galeri
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}