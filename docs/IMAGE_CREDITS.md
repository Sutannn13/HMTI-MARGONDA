# Image Credits - HMTI UBSI Margonda

## Current Status

Website ini saat ini menggunakan **placeholder images** untuk galeri karena belum ada dokumentasi foto resmi dari HMTI UBSI Margonda.

## Placeholder System

Placeholder gambar menggunakan komponen `EmptyImagePlaceholder` yang menampilkan:
- Icon gambar
- Judul/label
- Background gradient biru

Contoh:
- `/images/gallery/workshop-web.jpg` → Placeholder dengan label "Workshop Web Development"

## Cara Menggunakan Placeholder

Di file `src/data/gallery.ts`, set `placeholder: true`:

```typescript
{
  id: 'gallery-1',
  title: 'Workshop Web Development',
  placeholder: true,    // ← Aktifkan placeholder
  // image akan ditampilkan sebagai placeholder
}
```

## Mengganti dengan Gambar Asli

### Langkah 1: Siapkan Gambar

1. Kumpulkan foto dokumentasi kegiatan HMTI
2. Pastikan resolusi minimal 800x600 piksel
3. Format: .jpg, .png, atau .webp
4. Ukuran file ideal: < 500KB

### Langkah 2: Letakkan Gambar

```
public/
├── images/
│   └── gallery/
│       ├── workshop-web.jpg
│       ├── sharing-session.jpg
│       ├── bakti-sosial.jpg
│       └── ...
```

### Langkah 3: Update Data

Di file `src/data/gallery.ts`:

```typescript
{
  id: 'gallery-1',
  title: 'Workshop Web Development',
  category: 'Workshop',
  date: '2024-03-15',
  image: '/images/gallery/workshop-web.jpg',  // ← Path ke gambar asli
  placeholder: false,                         // ← Set false
}
```

## Sumber Gambar yang Diperbolehkan

### 1. Dokumentasi Sendiri (Rekomendasi)
- Foto kegiatan HMTI
- Foto event yang diorganisir HMTI
- Foto anggota dan divisi

### 2. Gambar Gratis Lisensi
Jika butuh placeholder/gambar dekoratif:

**Unsplash (gratis untuk commercial use):**
- https://unsplash.com
- Tidak perlu atribusi untuk penggunaan internal

**Pexels (gratis untuk commercial use):**
- https://pexels.com
- Tidak perlu atribusi

**Pixabay (gratis untuk commercial use):**
- https://pixabay.com
- Tidak perlu atribusi

### 3. Icon & Ilustrasi

**Lucide React (MIT License):**
- https://lucide.dev
- Gratis untuk semua penggunaan
- Sudah digunakan di website ini

**Heroicons (MIT License):**
- https://heroicons.com
- Gratis untuk semua penggunaan

## BUKAN Sumber yang Diperbolehkan

- ❌ Google Images (bisa copyright)
- ❌ Bing Images (bisa copyright)
- ❌ Gambar dari website lain tanpa izin
- ❌ Stock photo berbayar yang di-download bajakan
- ❌ Meme atau gambar viral

## Checklist Sebelum Deploy

- [ ] Semua placeholder sudah diganti dengan gambar asli
- [ ] Gambar sudah optimal (size < 500KB)
- [ ] Gambar sudah di-backup
- [ ] Resolusi cukup (min 800x600)
- [ ] Format sudah benar (.jpg/.png/.webp)

## Catatan Penting

> **Peringatan:** Penggunaan gambar yang melanggar hak cipta bisa menimbulkan masalah hukum. Selalu gunakan gambar yang memiliki lisensi yang tepat atau gambar milik sendiri.

## Kontak untuk Pertanyaan Gambar

Jika ada pertanyaan tentang penggunaan gambar atau butuh bantuan mendapatkan gambar dokumentasi:
- Hubungi divisi Kominfo HMTI
- Hubungi admin website

---

*Terakhir diupdate: Mei 2024*