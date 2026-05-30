import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { siteConfig } from '@/data/site';
import { Instagram, Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi HMTI UBSI Margonda - Instagram, Email, dan lokasi kampus.',
};

export default function KontakPage() {
  return (
    <>
      <PageHero
        title="Hubungi Kami"
        subtitle="Kontak"
        description="Jangan ragu untuk menghubungi HMTI UBSI Margonda. Kami siap membantu dan merespons pertanyaan Anda."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground mb-6">
                  Hubungi kami melalui berbagai channel di bawah ini. Tim HMTI
                  akan merespons secepat mungkin.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                    <a
                      href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {siteConfig.social.instagram}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Follow dan DM untuk info terbaru
                    </p>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {siteConfig.social.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Email resmi HMTI UBSI Margonda
                    </p>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.contact.whatsapp || 'Hubungi via Instagram untuk info WA'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat untuk pertanyaan cepat
                    </p>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lokasi</h3>
                    <p className="text-muted-foreground">{siteConfig.social.address}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {siteConfig.social.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & FAQ */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Aksi Cepat
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/kolaborasi"
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Ajukan Kolaborasi</p>
                        <p className="text-sm text-muted-foreground">Form kerja sama</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link
                    href="/program-kerja"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Lihat Program Kerja</p>
                        <p className="text-sm text-muted-foreground">Agenda kegiatan</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link
                    href="/galeri"
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Lihat Galeri</p>
                        <p className="text-sm text-muted-foreground">Dokumentasi kegiatan</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Pertanyaan Umum
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Q: Bagaimana cara bergabung dengan HMTI?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A: Hubungi kami melalui Instagram atau hadir di acara orientasi
                      mahasiswa baru di kampus.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Q: Apakah bisa menjadi sponsor HMTI?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A: Ya! Silakan ajukan melalui halaman kolaborasi atau hubungi
                      kami langsung.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Q: Apakah HMTI terbuka untuk workshop bersama?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      A: Sangat terbuka! Kami senang bekerja sama untuk membuat
                      workshop yang bermanfaat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}