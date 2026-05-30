# Panduan Mengubah Konten Website HMTI UBSI Margonda

Website ini dirancang agar mudah diedit oleh pemula. Semua konten utama tersimpan di folder `src/data/`.

## Struktur Data

```
src/data/
├── site.ts           # Info umum website (nama, kontak, social media)
├── navigation.ts     # Struktur menu navbar & footer
├── visionMission.ts  # Visi, misi, dan nilai-nilai organisasi
├── divisions.ts      # Daftar divisi dan tanggung jawabnya
├── programs.ts       # Program kerja
├── events.ts         # Event/kegiatan
├── gallery.ts        # Galeri foto
└── structure.ts      # Struktur organisasi
```

---

## Cara Mengubah Konten

### 1. Mengubah Info Website (site.ts)

Buka `src/data/site.ts`:

```typescript
export const siteConfig = {
  name: 'HMTI UBSI Margonda',           // Nama organisasi
  fullName: 'Himpunan Mahasiswa Teknologi Informasi UBSI Margonda',
  tagline: 'Solidaritas, Pengembangan Potensi, dan Program Kerja Berdampak',
  description: 'Deskripsi website...',
  
  social: {
    instagram: '@hmtiubsimargonda',     // Ganti dengan IG asli
    email: 'hmtiubsimargonda@example.com', // Ganti email asli
    address: 'Jl. Raya Margonda No. 123...', // Alamat kampus
  },
  
  contact: {
    whatsapp: '6281234567890',          // Ganti nomor WA asli
  },
  
  partners: [],                         // Tambahkan partner nanti
};
```

### 2. Mengubah Visi & Misi (visionMission.ts)

Buka `src/data/visionMission.ts`:

```typescript
export const visionMissionData = {
  vision: {
    title: 'Visi',
    content: 'Isi visi baru di sini...',
  },
  mission: {
    title: 'Misi',
    items: [
      {
        id: 1,
        title: 'Judul Misi 1',
        description: 'Deskripsi misi 1...',
        icon: 'Heart',                  // Icon dari lucide-react
      },
      // Tambah misi baru...
    ],
  },
  values: [
    {
      id: 1,
      title: 'Nama Nilai',
      description: 'Deskripsi nilai...',
      icon: 'Heart',
    },
    // Tambah nilai baru...
  ],
};
```

### 3. Mengubah Divisi (divisions.ts)

Buka `src/data/divisions.ts`:

```typescript
export const divisionsData: Division[] = [
  {
    id: 'kominfo',
    name: 'Kominfo',
    shortName: 'KOMINFO',
    description: 'Deskripsi divisi...',
    responsibilities: [
      'Tanggung jawab 1',
      'Tanggung jawab 2',
    ],
    icon: 'MessageSquare',              // Nama icon dari lucide-react
    color: 'bg-blue-500',              // Warna background icon
  },
  // Tambah divisi baru...
];
```

**Daftar Icon yang Tersedia (dari lucide-react):**
- MessageSquare, BookOpen, GraduationCap, Building, Wallet, Calendar
- Heart, Handshake, Lightbulb, TrendingUp, Users, Target
- Code, Briefcase, Palette, Camera, Cpu, Trophy
- Dan masih banyak lagi (cek di https://lucide.dev)

**Daftar Warna:**
- bg-blue-500, bg-green-500, bg-purple-500, bg-orange-500
- bg-yellow-500, bg-red-500, bg-pink-500, bg-indigo-500

### 4. Mengubah Program Kerja (programs.ts)

Buka `src/data/programs.ts`:

```typescript
export const programsData: Program[] = [
  {
    id: 'workshop-web',
    title: 'Workshop Web Development',
    description: 'Deskripsi program...',
    category: 'akademik',              // akademik | sosial | teknologi | internal | eksternal | unggulam
    status: 'terlaksana',              // akan-datang | berlangsung | terlaksana
    date: '2024-03-15',
    location: 'Lab Komputer UBSI',
    impact: '50+ peserta terlatih',
    icon: 'Code',
  },
  // Tambah program baru...
];
```

### 5. Mengubah Event/Kegiatan (events.ts)

Buka `src/data/events.ts`:

```typescript
export const eventsData: Event[] = [
  {
    id: 'workshop-2024',
    title: 'Workshop Web Development',
    description: 'Deskripsi event...',
    date: '2024-03-15',
    location: 'Lab Komputer UBSI',
    status: 'terlaksana',              // akan-datang | berlangsung | terlaksana
    category: 'Workshop',             // Kategori event
    participants: 52,                 // Jumlah peserta (opsional)
  },
  // Tambah event baru...
];
```

### 6. Mengubah Galeri (gallery.ts)

Buka `src/data/gallery.ts`:

```typescript
export const galleryData: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Workshop Web Development',
    description: 'Deskripsi foto...',
    category: 'Workshop',             // Kategori: Workshop | Seminar | Sosial | Event | Internal
    date: '2024-03-15',
    image: '/images/gallery/nama-file.jpg',  // Path ke gambar
    placeholder: false,                // true = placeholder, false = gambar asli
  },
  // Tambah foto baru...
];
```

**Cara Menambah Gambar:**
1. Letakkan gambar di folder `public/images/gallery/`
2. Format yang didukung: .jpg, .png, .webp
3. Update path di data galeri

### 7. Mengubah Struktur Organisasi (structure.ts)

Buka `src/data/structure.ts`:

```typescript
export const structureData: OrganizationStructure = {
  title: 'Struktur Organisasi HMTI UBSI Margonda',
  positions: {
    kepala: [
      {
        id: 'ketua',
        name: 'Nama Ketua',           // Ganti dengan nama asli
        role: 'Ketua Umum HMTI',
        isPlaceholder: false,         // Set false jika sudah ada nama asli
      },
    ],
    secretary: [...],
    treasurer: [...],
    divisions: [
      {
        name: 'Kominfo',
        positions: [
          { id: 'koor-kominfo', name: 'Nama Koordinator', role: 'Koordinator', isPlaceholder: false },
        ],
      },
    ],
  },
};
```

---

## Menambah Halaman Baru

Jika ingin menambah halaman baru:

1. Buat folder di `src/app/nama-halaman/`
2. Buat file `page.tsx` di dalam folder tersebut
3. Update navigasi di `src/data/navigation.ts`

Contoh:
```
src/app/proker- baru/
├── page.tsx
└── loading.tsx (opsional)
```

---

## Tips untuk Pemula

1. **Backup dulu**: Sebelum mengubah, backup file yang akan diedit
2. **Format tanggal**: Gunakan format `YYYY-MM-DD` untuk konsistensi
3. **Icon**: Gunakan nama icon dari lucide-react (tanpa prefix)
4. **ID unik**: Setiap item harus punya ID unik (tidak boleh duplicate)
5. **Test**: Setelah edit, jalankan `npm run dev` dan cek hasilnya

---

## Menjadwalkan Update Konten

Website ini statis, jadi setiap perubahan perlu rebuild:

1. Edit file di `src/data/`
2. Jalankan `npm run build`
3. Deploy hasilnya

Tidak perlu restart server - cukup refresh browser setelah npm run dev.

---

## Butuh Bantuan?

Jika ada pertanyaan tentang cara mengubah konten:
1. Baca dokumentasi ini dengan teliti
2. Cek referensi lucide-react di https://lucide.dev/icons
3. Hubungi admin/developer yang membuat website ini