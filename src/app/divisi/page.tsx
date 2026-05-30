import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { divisionsData } from '@/data/divisions';
import { MessageSquare, BookOpen, GraduationCap, Building, Wallet, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Divisi',
  description: 'Divisi-divisi dalam HMTI UBSI Margonda - Kominfo, Litbang, PSDM, Humasi, Danus, dan Acara.',
};

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  BookOpen,
  GraduationCap,
  Building,
  Wallet,
  Calendar,
};

export default function DivisiPage() {
  return (
    <>
      <PageHero
        title="Divisi HMTI"
        subtitle="Bidang & Departemen"
        description="Enam divisi yang mendukung kegiatan dan program kerja HMTI UBSI Margonda."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisionsData.map((division) => {
              const Icon = iconMap[division.icon] || MessageSquare;
              return (
                <div
                  key={division.id}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${division.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{division.name}</h3>
                      <p className="text-sm text-blue-500 font-medium">{division.shortName}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {division.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Tanggung Jawab:
                    </h4>
                    <ul className="space-y-1">
                      {division.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ingin Bergabung dengan Divisi Tertentu?
            </h2>
            <p className="text-muted-foreground mb-6">
              Setiap anggota HMTI dapat berkontribusi di berbagai divisi sesuai
              minat dan kemampuan. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}