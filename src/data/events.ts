export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  status: 'akan-datang' | 'berlangsung' | 'terlaksana';
  category: string;
  participants?: number;
  image?: string;
}

export const eventsData: Event[] = [
  {
    id: 'workshop-web-2024',
    title: 'Workshop Web Development Dasar',
    description:
      'Workshop hands-on pengembangan web menggunakan HTML, CSS, dan JavaScript untuk pemula.',
    date: '2024-03-15',
    location: 'Lab Komputer Lantai 2, UBSI Margonda',
    status: 'terlaksana',
    category: 'Workshop',
    participants: 52,
  },
  {
    id: 'sharing-karier-2024',
    title: 'Sharing Session: Karier di Dunia IT',
    description:
      'Sesi berbagi pengalaman dari alumni dan praktisi IT tentang peluang karier di industri teknologi.',
    date: '2024-02-20',
    location: 'Aula Utama UBSI Margonda',
    status: 'terlaksana',
    category: 'Seminar',
    participants: 120,
  },
  {
    id: 'bakti-sosial-2024',
    title: 'Bakti Sosial Teknologi',
    description:
      'Pelatihan komputer dasar untuk anak-anak di kampung sekitar kampus.',
    date: '2024-01-28',
    location: 'Kampung Melayu, Jakarta Timur',
    status: 'terlaksana',
    category: 'Sosial',
    participants: 35,
  },
  {
    id: 'tech-talk-ai',
    title: 'Tech Talk: AI untuk Pemula',
    description:
      'Diskusi dan edukasi tentang dasar-dasar Artificial Intelligence dan Machine Learning.',
    date: '2024-08-20',
    location: 'Aula Utama UBSI Margonda',
    status: 'akan-datang',
    category: 'Tech Talk',
    participants: 150,
  },
  {
    id: 'hackathon-2024',
    title: 'Hackathon HMTI 2024',
    description:
      'Kompetisi pengembangan aplikasi mobile untuk memecahkan masalah sosial.',
    date: '2024-09-15',
    endDate: '2024-09-17',
    location: 'TBA',
    status: 'akan-datang',
    category: 'Kompetisi',
    participants: 80,
  },
  {
    id: 'pelatihan-uiux',
    title: 'Pelatihan UI/UX Design',
    description:
      'Pelatihan desain antarmuka pengguna menggunakan Figma untuk mahasiswa TI.',
    date: '2024-07-01',
    location: 'Lab Komputer UBSI Margonda',
    status: 'akan-datang',
    category: 'Workshop',
    participants: 40,
  },
];

export const eventCategories = [
  { value: 'all', label: 'Semua' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Seminar', label: 'Seminar' },
  { value: 'Sosial', label: 'Sosial' },
  { value: 'Tech Talk', label: 'Tech Talk' },
  { value: 'Kompetisi', label: 'Kompetisi' },
];