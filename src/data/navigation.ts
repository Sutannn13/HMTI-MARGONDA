export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: 'Beranda',
    href: '/',
    description: 'Halaman utama HMTI UBSI Margonda',
  },
  {
    title: 'Tentang HMTI',
    href: '/tentang',
    children: [
      {
        title: 'Profil HMTI',
        href: '/tentang',
        description: 'Mengenal lebih dekat HMTI UBSI Margonda',
      },
      {
        title: 'Visi & Misi',
        href: '/visi-misi',
        description: 'Visi dan misi HMTI UBSI Margonda',
      },
      {
        title: 'Struktur Organisasi',
        href: '/struktur',
        description: 'Struktur organisasi HMTI UBSI Margonda',
      },
      {
        title: 'Divisi',
        href: '/divisi',
        description: 'Divisi-divisi dalam HMTI UBSI Margonda',
      },
    ],
  },
  {
    title: 'Program Kerja',
    href: '/program-kerja',
    children: [
      {
        title: 'Proker Unggulan',
        href: '/program-kerja?category=unggulan',
        description: 'Program kerja unggulan HMTI',
      },
      {
        title: 'Proker Akademik',
        href: '/program-kerja?category=akademik',
        description: 'Program kerja bidang akademik',
      },
      {
        title: 'Proker Sosial',
        href: '/program-kerja?category=sosial',
        description: 'Program kerja bidang sosial',
      },
      {
        title: 'Dokumentasi Proker',
        href: '/kegiatan',
        description: 'Dokumentasi program kerja',
      },
    ],
  },
  {
    title: 'Kegiatan',
    href: '/kegiatan',
    children: [
      {
        title: 'Event',
        href: '/kegiatan',
        description: 'Event dan kegiatan HMTI',
      },
      {
        title: 'Galeri',
        href: '/galeri',
        description: 'Galeri foto kegiatan HMTI',
      },
      {
        title: 'Berita',
        href: '/berita',
        description: 'Berita dan informasi terkini',
      },
    ],
  },
  {
    title: 'Kolaborasi',
    href: '/kolaborasi',
    children: [
      {
        title: 'Ajukan Kolaborasi',
        href: '/kolaborasi',
        description: 'Ajukan kerja sama dengan HMTI',
      },
      {
        title: 'Bentuk Kerja Sama',
        href: '/kolaborasi#bentuk',
        description: 'Macam-macam bentuk kerja sama',
      },
      {
        title: 'Partner',
        href: '/kolaborasi#partner',
        description: 'Partner dan sponsor HMTI',
      },
    ],
  },
  {
    title: 'Kontak',
    href: '/kontak',
    description: 'Hubungi HMTI UBSI Margonda',
  },
];

export const footerNavigation = {
  tentang: [
    { title: 'Profil HMTI', href: '/tentang' },
    { title: 'Visi & Misi', href: '/visi-misi' },
    { title: 'Struktur Organisasi', href: '/struktur' },
    { title: 'Divisi', href: '/divisi' },
  ],
  program: [
    { title: 'Proker Unggulan', href: '/program-kerja' },
    { title: 'Proker Akademik', href: '/program-kerja?category=akademik' },
    { title: 'Proker Sosial', href: '/program-kerja?category=sosial' },
    { title: 'Dokumentasi', href: '/kegiatan' },
  ],
  informasi: [
    { title: 'Event', href: '/kegiatan' },
    { title: 'Galeri', href: '/galeri' },
    { title: 'Ajukan Kolaborasi', href: '/kolaborasi' },
    { title: 'Kontak', href: '/kontak' },
  ],
};