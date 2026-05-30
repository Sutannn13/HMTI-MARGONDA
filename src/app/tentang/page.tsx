import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { visionMissionData } from '@/data/visionMission';
import { siteConfig } from '@/data/site';
import { Heart, Handshake, Lightbulb, TrendingUp, Users, Award, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang HMTI',
  description: 'Mengenal lebih dekat HMTI UBSI Margonda - Himpunan Mahasiswa Teknologi Informasi UBSI Margonda.',
};

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Handshake,
  Lightbulb,
  TrendingUp,
};

export default function TentangPage() {
  return (
    <>
      <PageHero
        title="Tentang HMTI"
        subtitle="Profil Organisasi"
        description="Mengenal lebih dekat HMTI UBSI Margonda, organisasi kemahasiswaan untuk mahasiswa Teknologi Informasi."
      />

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">H</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{siteConfig.name}</h3>
                    <p className="text-muted-foreground">Periode 2024/2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.fullName} adalah organisasi kemahasiswaan yang
                  berdedikasi untuk mengembangkan potensi mahasiswa TI melalui
                  berbagai program kerja yang berdampak.
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <SectionHeader
                title="Siapa Kami?"
                subtitle="Tentang Kami"
                centered={false}
                description="Kami adalah komunitas mahasiswa Teknologi Informasi yang berkomitmen untuk saling mendukung, berinovasi, dan memberikan kontribusi nyata bagi masyarakat."
              />

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  HMTI UBSI Margonda didirikan dengan semangat untuk menjadi
                  wadah pengembangan diri bagi setiap mahasiswa Teknologi Informasi.
                  Melalui berbagai program kerja dan kegiatan, kami berusaha
                  menciptakan lingkungan yang kondusif untuk belajar dan bertumbuh.
                </p>
                <p className="text-muted-foreground">
                  Dengan didukung oleh 6 divisi yang masing-masing memiliki
                  peran dan tanggung jawab berbeda, kami memastikan setiap
                  program kerja dapat dijalankan dengan maksimal dan memberikan
                  manfaat bagi seluruh anggota maupun masyarakat luas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <SectionHeader
            title="Nilai-Nilai Kami"
            subtitle="Core Values"
            description="Empat nilai utama yang menjadi pedoman dalam setiap kegiatan HMTI UBSI Margonda."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionMissionData.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Heart;
              return (
                <div
                  key={value.id}
                  className="glass rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why HMTI Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Komunitas Solid</h3>
              <p className="text-sm text-muted-foreground">
                Bergabung dengan komunitas mahasiswa TI yang saling mendukung
                dan membangun rasa solidaritas antar anggota.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pengembangan Diri</h3>
              <p className="text-sm text-muted-foreground">
                Ikuti berbagai pelatihan, workshop, dan program kerja yang
                membantu mengembangkan skill dan pengalaman Anda.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Dampak Nyata</h3>
              <p className="text-sm text-muted-foreground">
                Terlibat dalam program kerja yang memberikan manfaat nyata
                bagi masyarakat dan lingkungan sekitar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}