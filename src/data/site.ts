export const siteConfig = {
  name: 'HMTI UBSI Margonda',
  fullName: 'Himpunan Mahasiswa Teknologi Informasi UBSI Margonda',
  tagline: 'Solidaritas, Pengembangan Potensi, dan Program Kerja Berdampak',
  description:
    'Website resmi HMTI UBSI Margonda - Himpunan Mahasiswa Teknologi Informasi yang berfokus pada solidaritas, pengembangan potensi, dan program kerja berdampak bagi masyarakat.',
  keywords: [
    'HMTI UBSI Margonda',
    'Himpunan Mahasiswa Teknologi Informasi',
    'UBSI Margonda',
    'organisasi mahasiswa',
    'teknologi informasi',
    'mahasiswa TI',
    'kampus UBSI',
    'organisasi mahasiswa TI',
  ],
  social: {
    instagram: '@hmtiubsimargonda',
    email: 'hmtiubsimargonda@example.com',
    location: 'Kampus UBSI Margonda, Jakarta',
    address: 'Jl. Raya Margonda No. 123, Pondok Cina, Beji, Kota Depok, Jawa Barat 16424',
  },
  contact: {
    whatsapp: '',
  },
  partners: [],
};

export const metaConfig = {
  title: {
    default: 'HMTI UBSI Margonda',
    template: '%s | HMTI UBSI Margonda',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  siteUrl: 'https://hmtiubsimargonda.vercel.app',
  ogImage: '/images/og-image.png',
};