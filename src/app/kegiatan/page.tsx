'use client';

import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { eventsData, eventCategories, type Event } from '@/data/events';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

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

export default function KegiatanPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEvents = activeCategory === 'all'
    ? eventsData
    : eventsData.filter((e) => e.category === activeCategory);

  const upcomingEvents = eventsData.filter((e) => e.status === 'akan-datang');
  const pastEvents = eventsData.filter((e) => e.status === 'terlaksana');

  return (
    <>
      <PageHero
        title="Kegiatan & Event"
        subtitle="Agenda HMTI"
        description="Berbagai kegiatan dan event yang telah dan akan dilaksanakan oleh HMTI UBSI Margonda."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-1">
                {eventsData.length}
              </p>
              <p className="text-sm text-muted-foreground">Total Event</p>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-green-500 mb-1">
                {upcomingEvents.length}
              </p>
              <p className="text-sm text-muted-foreground">Akan Datang</p>
            </div>
            <div className="glass rounded-xl p-6 text-center col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-blue-500 mb-1">
                {pastEvents.length}
              </p>
              <p className="text-sm text-muted-foreground">Sudah Terlaksana</p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {eventCategories.map((cat) => (
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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full border',
                    statusColors[event.status]
                  )}>
                    {statusLabels[event.status]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {event.category}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                      {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  {event.participants && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} peserta</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Tidak ada event dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}