# Setup Supabase untuk HMTI UBSI Margonda

Panduan lengkap untuk mengatur Supabase sebagai backend untuk form kolaborasi website HMTI.

## Prasyarat

- Akun Supabase (daftar gratis di https://supabase.com)
- Project sudah dibuat di Supabase

## Langkah 1: Buat Project Supabase

1. Buka https://supabase.com dan login
2. Klik "New Project"
3. Isi detail project:
   - Name: `hmti-ubsi-margonda`
   - Database Region: Pilih region terdekat (misalnya Singapore)
   - Password: Generate secure password
4. Klik "Create new project"
5. Tunggu proses pembuatan (~2 menit)

## Langkah 2: Dapatkan Kredensial

1. Di dashboard Supabase, masuk ke **Settings** > **API**
2. Copy nilai berikut:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Langkah 3: Jalankan Schema SQL

1. Di dashboard Supabase, masuk ke **SQL Editor**
2. Copy isi file `supabase/schema.sql`
3. Paste ke SQL Editor
4. Klik **Run** atau tekan `Ctrl+Enter`
5. Pastikan muncul pesan "Success"

## Langkah 4: Konfigurasi Environment Variable

1. Buat file `.env.local` di root project
2. Isi dengan:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Jangan shared `.env.local` ke Git (sudah ada di .gitignore)

## Langkah 5: Test Form Kolaborasi

1. Jalankan development server:
   ```bash
   npm run dev
   ```
2. Buka http://localhost:3000/kolaborasi
3. Isi form dan submit
4. Cek apakah data masuk di Supabase:
   - Masuk ke **Table Editor**
   - Pilih table `collaboration_requests`
   - Data baru harusnya terlihat

## Struktur Database

### Tabel: collaboration_requests

| Column              | Type      | Required | Description                        |
|---------------------|-----------|----------|------------------------------------|
| id                  | uuid      | Yes      | Primary key, auto-generated        |
| name                | text      | Yes      | Nama lengkap pengaju                |
| institution         | text      | Yes      | Nama instansi/brand/organisasi     |
| email               | text      | Yes      | Email pengaju                      |
| whatsapp            | text      | No       | Nomor WhatsApp (opsional)          |
| collaboration_type  | text      | Yes      | Jenis kolaborasi yang diajukan     |
| message             | text      | Yes      | Pesan/proposal                     |
| created_at          | timestamptz | Yes    | Timestamp pembuatan (auto)         |

## Row Level Security (RLS)

Tabel ini menggunakan RLS untuk keamanan:

- **INSERT**: Dibolehkan untuk semua user (anon)
- **SELECT**: Tidak dibolehkan untuk publik (aman)
- **UPDATE**: Tidak dibolehkan untuk publik
- **DELETE**: Tidak dibolehkan untuk publik

Ini berarti visitor website bisa submit form, tapi tidak bisa melihat atau mengubah data orang lain.

## Troubleshooting

### Error: "Supabase is not configured"
Pastikan file `.env.local` ada dan berisi nilai yang benar.

### Error: "Row Level Security"
 Pastikan RLS policy sudah di-set dengan benar. Cek di Supabase:
- Table Editor > collaboration_requests > Authentication

### Error: "Invalid API key"
Pastikan `NEXT_PUBLIC_SUPABASE_ANON_KEY` sesuai dengan yang ada di dashboard Supabase.

## Mengakses Data Kolaborasi

Karena tidak ada admin dashboard, untuk melihat data kolaborasi:

1. Login ke Supabase dashboard
2. masuk ke Table Editor > collaboration_requests
3. Atau gunakan API Supabase untuk export data

## Update Kontak di Database

Data kontak masih menggunakan file `src/data/site.ts`. Untuk update:
1. Edit file tersebut
2. Tidak perlu restart server (Next.js hot reload)

## Keamanan

- Jangan pernah expose `SUPABASE_SERVICE_ROLE_KEY` ke frontend
- File `.env.local` sudah di-gitignore
- RLS policy memastikan data tidak bisa diakses sembarangan
- Form validation dilakukan di client-side dan server-side