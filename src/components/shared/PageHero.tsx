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
}

export function PageHero({
  title,
  subtitle,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 hero-gradient overflow-hidden', className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {subtitle && (
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}