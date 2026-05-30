export interface Program {
  id: string;
  title: string;
  description: string;
  category: 'unggulan' | 'akademik' | 'sosial' | 'teknologi' | 'internal' | 'eksternal';
  status: 'akan-datang' | 'berlangsung' | 'terlaksana';
  date?: string;
  location?: string;
  impact?: string;
  icon: string;
}

export const programsData: Program[] = [
  {
    id: 'workshop-web-dev',
    title: 'Workshop Web Development',
    description:
      'Workshop hands-on tentang pengembangan web modern menggunakan Next.js, React, dan Tailwind CSS untuk mahasiswa TI.',
    category: 'akademik',
    status: 'terlaksana',
    date: '2024-03-15',
    location: 'Lab Komputer UBSI Margonda',
    impact: '50+ peserta terlatih',
    icon: 'Code',
  },
  {
    id: 'sharing-session-karier',
    title: 'Sharing Session Karier IT',
    description:
      'Sesi berbagi pengalaman dan insight tentang karier di dunia teknologi informasi dari praktisi industri.',
    category: 'akademik',
    status: 'terlaksana',
    date: '2024-02-20',
    location: 'Aula UBSI Margonda',
    impact: '100+ peserta',
    icon: 'Briefcase',
  },
  {
    id: 'bakti-sosial-teknologi',
    title: 'Bakti Sosial Teknologi',
    description:
      'Program bakti sosial dengan pendekatan teknologi, meliputi pelatihan komputer dasar untuk masyarakat sekitar.',
    category: 'sosial',
    status: 'terlaksana',
    date: '2024-01-28',
    location: 'Kampung Melayu, Jakarta',
    impact: '30+ warga pelatihan',
    icon: 'Heart',
  },
  {
    id: 'hmti-community',
    title: 'HMTI Goes to Community',
    description:
      'Kunjungan dan pendampingan teknologi untuk komunitas kurang mampu di sekitar kampus.',
    category: 'sosial',
    status: 'akan-datang',
    date: '2024-06-15',
    location: 'TBA',
    impact: 'Target 50+ warga',
    icon: 'Users',
  },
  {
    id: 'pelatihan-ui-ux',
    title: 'Pelatihan UI/UX Design',
    description:
      'Pelatihan desain UI/UX menggunakan Figma untuk meningkatkan skill desain anggota HMTI.',
    category: 'teknologi',
    status: 'akan-datang',
    date: '2024-07-01',
    location: 'Online/Offline Hybrid',
    impact: 'Target 40+ peserta',
    icon: 'Palette',
  },
  {
    id: 'dokumentasi-publikasi',
    title: 'Dokumentasi & Publikasi Kegiatan',
    description:
      'Sistem dokumentasi dan publikasi yang terstruktur untuk setiap program kerja HMTI.',
    category: 'internal',
    status: 'berlangsung',
    impact: '100% kegiatan terdokumentasi',
    icon: 'Camera',
  },
  {
    id: 'tech-talk-ai',
    title: 'Tech Talk: AI untuk Pemula',
    description:
      'Sesi diskusi dan edukasi tentang kecerdasan buatan dan machine learning untuk mahasiswa.',
    category: 'unggulan',
    status: 'akan-datang',
    date: '2024-08-20',
    location: 'Aula Utama UBSI',
    impact: 'Target 150+ peserta',
    icon: 'Cpu',
  },
  {
    id: 'hackathon-hmti',
    title: 'Hackathon HMTI 2024',
    description:
      'Kompetisi pengembangan aplikasi mobile untuk memecahkan masalah sosial di lingkungan mahasiswa.',
    category: 'unggulan',
    status: 'akan-datang',
    date: '2024-09-15',
    location: 'TBA',
    impact: 'Target 20 tim',
    icon: 'Trophy',
  },
];

export const programCategories = [
  { value: 'all', label: 'Semua' },
  { value: 'unggulan', label: 'Proker Unggulan' },
  { value: 'akademik', label: 'Akademik' },
  { value: 'sosial', label: 'Sosial' },
  { value: 'teknologi', label: 'Teknologi' },
  { value: 'internal', label: 'Internal' },
  { value: 'eksternal', label: 'Eksternal' },
];