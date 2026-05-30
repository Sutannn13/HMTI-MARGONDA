import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Berita',
  description: 'Berita dan informasi terkini dari HMTI UBSI Margonda.',
};

export default function BeritaPage() {
  return (
    <>
      <PageHero
        title="Berita & Informasi"
        subtitle="Berita"
        description="Berita dan informasi terkini dari HMTI UBSI Margonda."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Segera Hadir
            </h2>

            <p className="text-muted-foreground mb-8">
              Halaman berita sedang dalam pengembangan. Nantikan informasi terkini
              dari HMTI UBSI Margonda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kegiatan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Lihat Kegiatan
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}