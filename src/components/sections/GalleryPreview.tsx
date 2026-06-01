'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { galleryData } from '@/data/gallery';
import { EmptyImagePlaceholder } from '@/components/shared/EmptyImagePlaceholder';
import { ArrowRight, Calendar, Folder, Image as ImageIcon, Eye } from 'lucide-react';

export function GalleryPreview() {
  const featuredGalleries = galleryData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Galeri Kegiatan"
          subtitle="Dokumentasi"
          description="Kumpulan foto dan dokumentasi berbagai kegiatan dan program kerja HMTI UBSI Margonda."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredGalleries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Image Area */}
              {item.placeholder ? (
                <EmptyImagePlaceholder
                  className="aspect-[4/3] w-full"
                  text={item.title}
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Info Bar */}
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Folder className="h-3 w-3" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
            className="inline-flex items-center gap-2 text-blue-600 font-medium transition-colors hover:text-blue-800 group"
          >
            Lihat Semua Galeri
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}