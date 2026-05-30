'use client';

import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { galleryData, galleryCategories, type GalleryItem } from '@/data/gallery';
import { EmptyImagePlaceholder } from '@/components/shared/EmptyImagePlaceholder';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, Folder } from 'lucide-react';

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredGallery = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        title="Galeri Kegiatan"
        subtitle="Dokumentasi"
        description="Kumpulan foto dan dokumentasi berbagai kegiatan HMTI UBSI Margonda."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {galleryCategories.map((cat) => (
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

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(item)}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium mb-1">{item.title}</p>
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

          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Tidak ada foto dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {new Date(selectedImage.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })} - {selectedImage.category}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {selectedImage.placeholder ? (
                <EmptyImagePlaceholder className="w-full aspect-video" text={selectedImage.title} />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full aspect-video object-cover rounded-xl"
                />
              )}
              {selectedImage.description && (
                <p className="mt-4 text-muted-foreground">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}