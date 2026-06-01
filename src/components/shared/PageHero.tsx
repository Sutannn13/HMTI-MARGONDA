'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  badge?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  children,
  className,
  badge,
}: PageHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 hero-gradient overflow-hidden', className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          {badge && (
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/80 px-4 py-1.5 text-xs font-medium text-blue-700 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {badge}
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mb-6 text-lg text-slate-600 md:text-xl">
              {description}
            </p>
          )}

          {/* Children */}
          {children}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}