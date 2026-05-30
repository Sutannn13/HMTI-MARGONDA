import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { CollaborationForm } from '@/components/forms/CollaborationForm';
import { Handshake, Coffee, Users, Building, Calendar, Heart, Code, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ajukan Kolaborasi',
  description: 'Ajukan kerja sama dengan HMTI UBSI Margonda - Seminar, Workshop, Sponsorship, dan lainnya.',
};

const collaborationTypes = [
  {
    icon: Coffee,
    title: 'Seminar',
    description: 'Khusus seminar dan talkshow teknologi',
  },
  {
    icon: Users,
    title: 'Workshop',
    description: 'Pelatihan dan workshop bersama',
  },
  {
    icon: Building,
    title: 'Sponsorship',
    description: 'Dukung program kerja kami',
  },
  {
    icon: Globe,
    title: 'Media Partner',
    description: 'Kerja sama media dan publikasi',
  },
  {
    icon: Calendar,
    title: 'Community Event',
    description: 'Acara dan kegiatan komunitas',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'Program dampak sosial',
  },
  {
    icon: Code,
    title: 'Technology',
    description: 'Kolaborasi teknologi',
  },
];

export default function KolaborasiPage() {
  return (
    <>
      <PageHero
        title="Ajukan Kolaborasi"
        subtitle="Kerja Sama"
        description="HMTI UBSI Margonda terbuka untuk kerja sama dengan berbagai pihak. Mari ciptakan dampak positif bersama!"
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Bentuk Kerja Sama
                </h2>
                <p className="text-muted-foreground mb-6">
                  HMTI UBSI Margonda terbuka untuk berbagai bentuk kerja sama dengan
                  kampus, komunitas, brand, dan stakeholder lainnya.
                </p>
              </div>

              <div id="bentuk" className="grid grid-cols-2 gap-4">
                {collaborationTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={index}
                      className="glass rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Mengapa Berkolaborasi dengan HMTI?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        Jangkauan ke mahasiswa TI aktif dan calon profesional IT
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        Promosi brand melalui berbagai media dan event
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        Kontribusi nyata terhadap pengembangan SDM teknologi
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        Dampak sosial positif bagi masyarakat luas
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Partner Section */}
              <div id="partner">
                <h3 className="font-semibold text-foreground mb-4">Partner Kami</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="glass rounded-lg px-4 py-2 text-sm text-muted-foreground">
                    Partner 1
                  </div>
                  <div className="glass rounded-lg px-4 py-2 text-sm text-muted-foreground">
                    Partner 2
                  </div>
                  <div className="glass rounded-lg px-4 py-2 text-sm text-muted-foreground">
                    Partner 3
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Daftar partner akan diperbarui setelah kerja sama terjalin.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Form Pengajuan Kolaborasi
                </h2>
                <CollaborationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}