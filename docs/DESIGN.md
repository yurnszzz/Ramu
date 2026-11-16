# Desain Ramu

Acuan visual: [design board](../planning/DESIGN_BOARD.html). Board adalah ilustrasi, bukan implementasi produk atau materi agama yang telah direview.

## Arah

Ruang kerja mentor yang tenang dan mudah dipindai. Gunakan material kertas secara halus: latar hangat, lembar krem, bayangan lembut, catatan sage, dan penanda emas kecil. Halaman pertama langsung membuka Bank Materi tanpa landing page pemasaran terpisah.

## Token

| Peran | Nilai |
| --- | --- |
| Teal utama | `#073E43` |
| Teal hover | `#0D5056` |
| Aksen emas | `#D9B54A` |
| Kertas | `#FFFDF7` |
| Sage | `#E4EBE2` |
| Latar | `#EEEADE` |
| Teks utama | `#183D3D` |
| Teks pendukung | `#546763` |
| Garis | `#D5D7CA` |

Seluruh token produk berada di `assets/css/style.css`. Georgia dipakai untuk judul dan wordmark; Arial/Helvetica/sans-serif untuk teks isi. Tidak ada unduhan font atau dependensi eksternal. Teks isi minimal 16px; metadata dan label navigasi mobile 14px.

## Layout dan interaksi

- Kontainer maksimal 1160px; gutter 16px di ponsel dan 32px mulai 640px.
- Navigasi selalu terlihat, menandai halaman aktif dengan `aria-current="page"`.
- Di bawah 960px, konten satu kolom. Desktop memakai lembar utama dan sidebar 300px.
- Daftar isi panduan mendahului artikel pada mobile dan menjadi sidebar kanan pada desktop.
- Fokus keyboard jelas, skip link ke `main`, target tautan minimal 44px.
- Transisi hanya warna hover yang singkat; hormati `prefers-reduced-motion`.
- Gunakan keterangan jujur untuk fitur belum tersedia, tanpa tombol atau input yang tidak berfungsi.

## Aset

Logo SVG yang diberikan masih calon aset; T01 memakai wordmark HTML dengan slot komentar. Tidak perlu foto dekoratif. Banner README dibuat sebagai SVG mandiri di `docs/assets/ramu-banner.svg`, dengan animasi sekali jalan dan fallback reduced motion. Aset dokumentasi tidak menjadi dependensi website.
