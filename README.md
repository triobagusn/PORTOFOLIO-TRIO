# Trio Bagus — Warehouse Operations & Digitalization Portfolio

Website portofolio statis, responsif, bilingual (English/Indonesia), dark/light mode, dan siap deploy ke Vercel.

## Isi portofolio

1. Warehouse Raw Material Control
2. Multi-Plant Stock Traceability
3. Waste Processing & Yield Management
4. Digital Document Approval Workflow
5. Service Level & Reporting Automation
6. Mobile Operations Hub

Semua proyek ditulis sebagai case study dengan nama proses dan data yang dianonimkan.

## Yang perlu diubah sebelum dipublikasikan

Buka `portfolio-data.js`, lalu ubah bagian:

```js
profile: {
  name: "Trio Bagus Nugroho",
  email: "your-email@example.com",
  linkedin: "",
  github: ""
}
```

Isi email, LinkedIn, dan GitHub milik Anda. Link kosong otomatis tampil nonaktif.

Anda juga dapat mengubah judul, deskripsi, kontribusi, fitur, dan technology stack setiap proyek pada file yang sama.

## Menjalankan di komputer

Cara termudah:

```bash
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.

Jangan membuka langsung dengan `file://` jika ingin menguji service worker/PWA.

## Deploy ke Vercel

1. Buat repository GitHub baru.
2. Upload seluruh isi folder ini ke root repository.
3. Di Vercel pilih **Add New Project**.
4. Import repository tersebut.
5. Framework Preset: **Other**.
6. Build Command: kosong.
7. Output Directory: kosong.
8. Klik **Deploy**.

Website ini tidak memerlukan npm, database, atau environment variable.

## Kebijakan keamanan portofolio

- Jangan memasukkan nama perusahaan, logo perusahaan, plant asli, email internal, nomor dokumen, nama supplier, atau data transaksi nyata.
- Jangan menghubungkan website ke Spreadsheet, Supabase, Drive, Telegram, atau API produksi.
- Jangan upload `.env`, service role key, bot token, Spreadsheet ID, atau credential lainnya.
- Screenshot proyek harus menggunakan data dummy dan branding netral.
- Gunakan angka dampak hanya jika benar-benar dapat dibuktikan.

## Struktur file

```text
index.html
styles.css
portfolio-data.js
script.js
manifest.webmanifest
sw.js
vercel.json
assets/
```
