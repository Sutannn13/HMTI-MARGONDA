'use client';

import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface EmptyImagePlaceholderProps {
  className?: string;
  text?: string;
}

export function EmptyImagePlaceholder({
  className,
  text = 'Gambar belum tersedia',
}: EmptyImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-200 p-8 text-center',
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <ImageIcon className="w-8 h-8 text-blue-400" />
      </div>
      <p className="text-sm text-blue-500 font-medium">{text}</p>
    </div>
  );
}