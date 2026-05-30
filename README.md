# HMTI UBSI Margonda Website

Website resmi **Himpunan Mahasiswa Teknologi Informasi UBSI Margonda** - organisasi kemahasiswaan yang berfokus pada solidaritas, pengembangan potensi, dan program kerja berdampak.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Backend:** Supabase (hanya untuk form kolaborasi)
- **Fonts:** Inter (via next/font)

## Fitur

- Website company profile / organisasi mahasiswa
- Landing page modern dengan animasi halus
- Halaman lengkap: Beranda, Tentang, Visi Misi, Struktur, Divisi, Program Kerja, Kegiatan, Galeri, Kolaborasi, Kontak
- Navbar dengan dropdown hover (desktop) dan mobile menu
- Form kolaborasi dengan Supabase (INSERT only)
- Responsive design (mobile, tablet, desktop)
- Glassmorphism, soft gradient, subtle animation
- Tidak ada login, tidak ada admin dashboard
- Tidak ada backend custom, tidak ada Laravel

## Prasyarat

- Node.js 18+
- npm atau yarn
- Akun Supabase (untuk fitur kolaborasi)

## Instalasi

### 1. Clone/Download Project

```bash
# Jika clone dari git
git clone <repo-url>
cd hmti-ubsi-margonda

# Atau langsung gunakan folder ini
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Supabase (Opsional)

Jika ingin mengaktifkan form kolaborasi:

1. Buat file `.env.local` di root project:
```bash
touch .env.local
```

2. Isi dengan kredensial Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Jalankan schema SQL:
   - Buka Supabase Dashboard > SQL Editor
   - Copy isi `supabase/schema.sql`
   - Run

Lihat `docs/SUPABASE_SETUP.md` untuk panduan lengkap.

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka http://localhost:3000

## Available Scripts

```bash
# Development
npm run dev

# Build Production
npm run build

# Start Production Server
npm run start

# Lint
npm run lint

# Validate (lint + build)
npm run validate
```

## Struktur Project

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Beranda
│   │   ├── tentang/           # Halaman Tentang
│   │   ├── visi-misi/         # Halaman Visi Misi
│   │   ├── struktur/          # Halaman Struktur
│   │   ├── divisi/            # Halaman Divisi
│   │   ├── program-kerja/     # Halaman Program Kerja
│   │   ├── kegiatan/          # Halaman Kegiatan
│   │   ├── galeri/            # Halaman Galeri
│   │   ├── kolaborasi/        # Halaman Kolaborasi
│   │   ├── kontak/            # Halaman Kontak
│   │   └── berita/            # Halaman Berita
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Section components
│   │   ├── forms/            # Form components
│   │   ├── shared/           # Shared components
│   │   └── ui/               # shadcn/ui components
│   ├── data/                  # Static data files
│   │   ├── site.ts            # Site config
│   │   ├── navigation.ts      # Navigation data
│   │   ├── visionMission.ts   # Visi Misi
│   │   ├── divisions.ts       # Divisi
│   │   ├── programs.ts       # Program Kerja
│   │   ├── events.ts         # Events
│   │   ├── gallery.ts         # Gallery
│   │   └── structure.ts       # Struktur Organisasi
│   └── lib/
│       ├── utils.ts           # Utility functions
│       └── supabase/          # Supabase client
│           └── client.ts       # Supabase config
├── public/
│   └── images/
│       └── gallery/          # Gallery images
├── docs/                      # Documentation
│   ├── SUPABASE_SETUP.md      # Supabase setup guide
│   ├── CONTENT_GUIDE.md       # Content editing guide
│   └── IMAGE_CREDITS.md       # Image credits
├── supabase/
│   └── schema.sql             # Database schema
├── .env.example               # Example env file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## Mengubah Konten

Website ini dirancang agar mudah diedit oleh pemula. Semua konten utama ada di folder `src/data/`.

### Contoh: Mengubah Visi Misi

1. Buka `src/data/visionMission.ts`
2. Edit teks sesuai kebutuhan
3. Simpan - tidak perlu restart server (hot reload)

Lihat `docs/CONTENT_GUIDE.md` untuk panduan lengkap.

## Tidak Ada Fitur Admin

Website ini **statis** dan **tidak memiliki**:
- ❌ Login/Register
- ❌ Admin Dashboard
- ❌ CMS
- ❌ Backend API custom
- ❌ Sistem manajemen user

Website hanya memiliki form kolaborasi yang menyimpan data ke Supabase.

## Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Hubungkan repo ke Vercel
3. Tambahkan environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Static Hosting

```bash
npm run build
```

Output ada di folder `.next/`. Upload ke hosting static seperti Netlify, Cloudflare Pages, atau GitHub Pages.

Note: Untuk static export, edit `next.config.js` dan ubah `output: 'export'` jika diperlukan.

## Troubleshooting

### Error: Module not found
```bash
npm install
```

### Build error
```bash
npm run lint
```
Perbaiki error yang muncul.

### Form tidak berfungsi
1. Pastikan `.env.local` sudah ada dan benar
2. Pastikan schema SQL sudah di-run di Supabase
3. Cek apakah RLS policy sudah benar

### Gambar tidak muncul
Gambar galeri menggunakan placeholder karena belum ada dokumentasi foto resmi. Lihat `docs/IMAGE_CREDITS.md`.

## Lisensi

Project ini adalah open source dan bebas digunakan untuk organisasi HMTI UBSI Margonda.

## Kontak

- Instagram: @hmtiubsimargonda (placeholder)
- Email: hmtiubsimargonda@example.com (placeholder)

---

*Made with Next.js, Tailwind CSS, and love.*