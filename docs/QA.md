# Pemeriksaan T01

Tanggal: 16 November 2026. Cakupan: fondasi tiga halaman, CSS bersama, navigasi, dokumentasi, dan banner README. Hasil ini tidak menguji fitur T02–T04 yang belum dibuat.

## Hasil

| Pemeriksaan | Hasil |
| --- | --- |
| `index.html`, `sesi.html`, `panduan.html` pada 320, 360, 768, 1440px | Lulus 12 kombinasi; tidak ada overflow horizontal atau elemen melewati viewport |
| Header, main, footer, satu h1, urutan heading, ID unik | Lulus |
| Navigasi ketiga halaman dan `aria-current` | Lulus; tujuan tautan dan halaman aktif sesuai |
| Tautan lokal, fragment panduan, dan tautan dokumentasi | Lulus |
| Keyboard Tab ke skip link, Enter memindahkan fokus ke main | Lulus pada ketiga halaman |
| Target tautan | Minimal 44px tinggi pada seluruh viewport uji |
| Pembesaran teks 200% pada viewport 1280px | Tidak ada overflow horizontal pada ketiga halaman |
| Dibuka melalui `file://` | CSS lokal termuat pada ketiga halaman |
| JavaScript dinonaktifkan | Struktur dan navigasi tetap tersedia |
| Console, respons resource, request eksternal | Tidak ada error runtime, resource gagal, atau request eksternal pada halaman produk |
| Kontras pasangan warna teks utama dan pendukung | 4,94:1 sampai 11,64:1; seluruh pasangan yang diuji di atas 4,5:1 |
| Banner SVG README | XML valid, render diperiksa; animasi sekali jalan selesai, reduced motion menonaktifkan animasi |
| Batas FE Basic/T01 | HTML/CSS native, tanpa script runtime, kontrol palsu, framework, API, atau storage |
| Git | Diff bebas kesalahan whitespace. Daftar file yang dipublikasikan diperiksa terpisah dari berkas kerja lokal. |

## Metode dan review

Pemeriksaan memakai Chrome headless yang sudah tersedia di Windows, melalui HTTP lokal dan file langsung. Ukuran viewport, DOM, navigasi, keyboard, resource, pembesaran teks, dan animasi diperiksa menggunakan harness sementara. Screenshot dan harness berada di `.local/`, tidak dipublikasikan sebagai source produk atau dependensi proyek.

Screenshot desktop dan mobile juga diperiksa secara visual. Review kode terpisah memeriksa semantik, batas tahap, tautan, dan keterbacaan. Temuan daftar isi panduan yang terlalu bawah pada ponsel sudah diperbaiki: daftar isi sekarang mendahului artikel pada mobile dan menjadi sidebar kanan pada desktop. Navigasi desktop diperbaiki agar label tampil satu baris. Perubahan tersebut sudah diuji ulang.

Pemeriksa desain Impeccable dijalankan sekali. Ia memberi peringatan Arial dan latar krem; keduanya dipertahankan karena ditetapkan board proyek. Peringatan padding pada baris terakhir kerangka sesi diperiksa: border terakhir memang dihapus, dengan padding lembar luar tetap tersedia. Peringatan tersebut tidak dilaporkan sebagai lint yang lulus tanpa catatan.

Pada 19 November 2026, setelah perapian dokumentasi, seluruh 46 rujukan lokal pada HTML dan Markdown diperiksa terhadap 17 file yang tercatat di indeks Git. Tujuan tautan, aset, dan fragment ditemukan. Tiga halaman, stylesheet, banner, dan lisensi identik dengan versi yang diperiksa pada 16 November.

## Batas pemeriksaan

Belum diuji pada perangkat fisik, Safari, Firefox, atau pembaca layar. Pembesaran teks 200% bukan pengganti seluruh variasi zoom browser. Banner diperiksa sebagai SVG di Chrome lokal; animasi pada setiap klien GitHub belum diverifikasi. Screenshot statis dan teks alternatif tetap tersedia bila animasi tidak ditampilkan.

## Review manual

1. Buka `index.html`, lalu gunakan ketiga tautan navigasi.
2. Periksa lebar 320, 360, 768, dan 1440px melalui browser.
3. Gunakan Tab dan Enter; pastikan fokus terlihat dan skip link menuju konten.
4. Buka daftar isi panduan di ponsel dan ikuti tautan ke bagian draf/kurasi.
5. Pastikan halaman mengakui koleksi dan editor belum tersedia.
6. Periksa README, lisensi, dan diff PR; merge hanya setelah review sesuai kebutuhan.
