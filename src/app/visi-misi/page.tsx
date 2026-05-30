import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { visionMissionData } from '@/data/visionMission';
import { Target, Users, FileText, ClipboardCheck, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visi & Misi',
  description: 'Visi dan Misi HMTI UBSI Margonda - Meningkatkan solidaritas dan program kerja berdampak.',
};

const iconMap: Record<string, React.ElementType> = {
  Target,
  Users,
  FileText,
  ClipboardCheck,
};

export default function VisiMisiPage() {
  return (
    <>
      <PageHero
        title="Visi & Misi"
        subtitle="Arah dan Tujuan"
        description="Visi dan misi HMTI UBSI Margonda untuk meningkatkan solidaritas dan memberikan dampak nyata bagi masyarakat."
      />

      {/* Vision Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visi HMTI UBSI Margonda
              </h2>
            </div>

            <div className="glass rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              {/* Decorative Quote */}
              <div className="absolute top-4 left-4 opacity-10">
                <Quote className="w-16 h-16 text-blue-500" />
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed relative z-10">
                &ldquo;{visionMissionData.vision.content}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Misi HMTI UBSI Margonda
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empat misi utama yang menjadi fondasi dalam menjalankan
              setiap program kerja HMTI UBSI Margonda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visionMissionData.mission.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Target;
              return (
                <div
                  key={item.id}
                  className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-blue-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tertarik dengan Program Kerja Kami?
            </h2>
            <p className="text-muted-foreground mb-6">
              HMTI UBSI Margonda terbuka untuk kolaborasi dan kerja sama
              dengan berbagai pihak. Mari bersama menciptakan dampak positif!
            </p>
            <a
              href="/kolaborasi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Ajukan Kolaborasi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}