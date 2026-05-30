export interface Division {
  id: string;
  name: string;
  shortName: string;
  description: string;
  responsibilities: string[];
  icon: string;
  color: string;
}

export const divisionsData: Division[] = [
  {
    id: 'kominfo',
    name: 'Kominfo',
    shortName: 'KOMINFO',
    description:
      'Divisi Komunikasi dan Informasi bertanggung jawab dalam pengelolaan media sosial, publikasi, dan dokumentasi kegiatan HMTI.',
    responsibilities: [
      'Mengelola media sosial HMTI',
      'Membuat konten publikasi',
      'Dokumentasi kegiatan',
      'Membanguncitra organisasi',
    ],
    icon: 'MessageSquare',
    color: 'bg-blue-500',
  },
  {
    id: 'litbang',
    name: 'Litbang',
    shortName: 'LITBANG',
    description:
      'Divisi Penelitian dan Pengembangan mengelola riset, pengembangan teknologi, dan inovasi dalam organisasi.',
    responsibilities: [
      'Riset dan pengembangan',
      'Pelatihan teknologi',
      'Workshop teknis',
      'Pengembangan skill anggota',
    ],
    icon: 'BookOpen',
    color: 'bg-purple-500',
  },
  {
    id: 'psdm',
    name: 'PSDM',
    shortName: 'PSDM',
    description:
      'Divisi Pengembangan Sumber Daya Mahasiswa bertanggung jawab untuk pengembangan soft skill dan hard skill anggota.',
    responsibilities: [
      'Pengembangan skill anggota',
      'Pelatihan dan workshop',
      'Recruitment anggota baru',
      'Evaluasi kinerja anggota',
    ],
    icon: 'GraduationCap',
    color: 'bg-green-500',
  },
  {
    id: 'humas',
    name: 'Humas',
    shortName: 'HUMAS',
    description:
      'Divisi Hubungan Masyarakat mengelola hubungan dengan pihak eksternal, kampus, dan komunitas lain.',
    responsibilities: [
      'Hubungan dengan kampus',
      'Kerja sama eksternal',
      'Networking',
      'Administrasi dan kesekretariatan',
    ],
    icon: 'Building',
    color: 'bg-orange-500',
  },
  {
    id: 'danus',
    name: 'Danus',
    shortName: 'DANUS',
    description:
      'Divisi Dana dan Usaha mengelola keuangan organisasi dan kegiatan penggalangan dana.',
    responsibilities: [
      'Pengelolaan keuangan',
      'Galang dana',
      'Sponsorship',
      'Proposal bantuan',
    ],
    icon: 'Wallet',
    color: 'bg-yellow-500',
  },
  {
    id: 'acara',
    name: 'Acara',
    shortName: 'ACARA',
    description:
      'Divisi Acara dan Program Kerja mengelola perencanaan dan pelaksanaan kegiatan HMTI.',
    responsibilities: [
      'Perencanaan acara',
      'Eksekusi program kerja',
      'Koordinasi dengan divisi lain',
      'Evaluasi kegiatan',
    ],
    icon: 'Calendar',
    color: 'bg-red-500',
  },
];