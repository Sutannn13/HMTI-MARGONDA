import { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { structureData } from '@/data/structure';
import { Users, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Struktur Organisasi',
  description: 'Struktur Organisasi HMTI UBSI Margonda - Pengurus dan Divisi.',
};

export default function StrukturPage() {
  const { positions } = structureData;

  return (
    <>
      <PageHero
        title="Struktur Organisasi"
        subtitle="Pengurus & Divisi"
        description="Struktur organisasi HMTI UBSI Margonda yang terdiri dari pengurus harian dan 6 divisi."
      />

      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          {/* Ketua & Wakil Ketua */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Pengurus Harian
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {positions.kepala.map((person) => (
                <div
                  key={person.id}
                  className="glass rounded-xl p-6 text-center w-[200px] card-hover"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-4">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-blue-400" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{person.name}</h4>
                  <p className="text-sm text-blue-500 font-medium">{person.role}</p>
                  {person.isPlaceholder && (
                    <span className="inline-block mt-2 text-xs text-muted-foreground">
                      (Placeholder)
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">
              Bidang Keuangan & Administrasi
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[...positions.secretary, ...positions.treasurer].map((person) => (
                <div
                  key={person.id}
                  className="glass rounded-xl p-4 text-center w-[160px] card-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{person.name}</h4>
                  <p className="text-xs text-green-500 font-medium">{person.role}</p>
                  {person.isPlaceholder && (
                    <span className="inline-block mt-1 text-xs text-muted-foreground">
                      (Placeholder)
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Divisi */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              Divisi-Divisi
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {positions.divisions.map((division) => (
                <div
                  key={division.name}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-foreground">{division.name}</h4>
                  </div>
                  <div className="space-y-2">
                    {division.positions.map((person) => (
                      <div
                        key={person.id}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                          <User className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <div>
                          <span className="text-foreground">{person.name}</span>
                          {person.isPlaceholder && (
                            <span className="text-xs text-muted-foreground ml-1">
                              (Placeholder)
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-center">
            <p className="text-sm text-yellow-800">
              <strong>Catatan:</strong> Struktur organisasi di atas masih menggunakan
              placeholder. Silakan update dengan data asli melalui file{' '}
              <code className="bg-yellow-100 px-1 py-0.5 rounded">src/data/structure.ts</code>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}