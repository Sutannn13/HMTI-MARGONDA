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
  ],
  social: {
    instagram: '@hmtiubsimargonda',
    // Ganti dengan akun Instagram resmi HMTI jika sudah ada
    email: 'hmtiubsimargonda@example.com',
    // Ganti dengan email resmi HMTI jika sudah ada
    location: 'Kampus UBSI Margonda, Jakarta',
    address: 'Jl. Raya Margonda No. 123, Pondok Cina, Beji, Kota Depok, Jawa Barat 16424',
    // Ganti dengan alamat resmi kampus UBSI Margonda jika berbeda
  },
  contact: {
    whatsapp: '',
    // Tambahkan nomor WhatsApp resmi HMTI jika ada
  },
  partners: [],
  // Daftar partner bisa ditambahkan di sini
};

export const metaConfig = {
  title: {
    default: 'HMTI UBSI Margonda',
    template: '%s | HMTI UBSI Margonda',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};