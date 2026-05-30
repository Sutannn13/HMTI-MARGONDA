export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  image: string;
  placeholder?: boolean;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Workshop Web Development',
    description: 'Suasana workshop web development di Lab Komputer UBSI',
    category: 'Workshop',
    date: '2024-03-15',
    image: '/images/gallery/workshop-web.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-2',
    title: 'Sharing Session Karier IT',
    description: 'Sesi sharing session dengan alumni dan praktisi IT',
    category: 'Seminar',
    date: '2024-02-20',
    image: '/images/gallery/sharing-session.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-3',
    title: 'Bakti Sosial Teknologi',
    description: 'Pelatihan komputer dasar untuk anak-anak di Kampung Melayu',
    category: 'Sosial',
    date: '2024-01-28',
    image: '/images/gallery/bakti-sosial.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-4',
    title: 'Pelatihan Figma',
    description: 'Workshop desain UI/UX menggunakan Figma',
    category: 'Workshop',
    date: '2024-04-10',
    image: '/images/gallery/pelatihan-figma.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-5',
    title: 'Perpisahan Angkatan',
    description: 'Acara perpisahan angkatan mahasiswa TI',
    category: 'Event',
    date: '2024-01-15',
    image: '/images/gallery/perpisahan.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-6',
    title: 'Orientasi Mahasiswa Baru',
    description: 'Penerjunan dan orientasi mahasiswa baru HMTI',
    category: 'Event',
    date: '2023-09-01',
    image: '/images/gallery/ospek.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-7',
    title: 'Team Building',
    description: 'Activities untuk mempererat hubungan antar anggota',
    category: 'Internal',
    date: '2024-05-20',
    image: '/images/gallery/team-building.jpg',
    placeholder: true,
  },
  {
    id: 'gallery-8',
    title: 'Rapat Koordinasi',
    description: 'Rapat koordinasi antar divisi HMTI',
    category: 'Internal',
    date: '2024-06-01',
    image: '/images/gallery/rapat.jpg',
    placeholder: true,
  },
];

export const galleryCategories = [
  { value: 'all', label: 'Semua' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Seminar', label: 'Seminar' },
  { value: 'Sosial', label: 'Sosial' },
  { value: 'Event', label: 'Event' },
  { value: 'Internal', label: 'Internal' },
];