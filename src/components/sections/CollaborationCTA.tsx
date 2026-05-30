'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake } from 'lucide-react';

export function CollaborationCTA() {
  return (
    <section className="bg-[#0067b1] py-16 text-white md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-white/30 bg-white/10">
            <Handshake className="h-8 w-8 text-white" />
          </div>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Mari Berkolaborasi dengan HMTI
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/85">
            HMTI UBSI Margonda terbuka untuk kerja sama dengan kampus, komunitas,
            brand, dan stakeholder lainnya. Mari bersama menciptakan dampak positif!
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/kolaborasi">
                Ajukan Kolaborasi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/60 bg-transparent text-white hover:bg-white hover:text-blue-700"
            >
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
