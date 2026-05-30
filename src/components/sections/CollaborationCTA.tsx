'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake } from 'lucide-react';

export function CollaborationCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-8 h-8 text-blue-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mari Berkolaborasi dengan HMTI
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            HMTI UBSI Margonda terbuka untuk kerja sama dengan kampus, komunitas,
            brand, dan stakeholder lainnya. Mari bersama menciptakan dampak positif!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/kolaborasi">
                Ajukan Kolaborasi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}