<p align="center">
  <img src="docs/assets/ramu-banner.svg" alt="Ramu — ruang kerja mentor. Bahan terarah, pertemuan bermakna." width="1100">
</p>

<p align="center">
  <a href="#mulai-lokal">Mulai lokal</a> ·
  <a href="#tahap-pengerjaan">Tahap pengerjaan</a> ·
  <a href="docs/DESIGN.md">Desain</a> ·
  <a href="LICENSE">Lisensi MIT</a>
</p>

Ramu membantu mentor pembinaan Islam memilih bahan diskusi, memandu pertemuan, dan membawa pulang catatan hasilnya. Proyek ini merupakan final project **Frontend Basic KSM Veterantech**.

## Halaman

| Halaman | Peran dalam Ramu |
| --- | --- |
| [Bank Materi](index.html) | Mencari delapan paket pembinaan melalui judul, ringkasan, atau kategori, lalu membuka alur diskusi beserta rujukannya. |
| [Ruang Sesi](sesi.html) | Menyusun sesi, memandu empat langkah pertemuan, mencatat hasil diskusi, dan menyalin ringkasan. |
| [Panduan & Sumber](panduan.html) | Penjelasan cara pakai, batas draf, dan prinsip kurasi. |

## Contoh satu pertemuan

1. Di **Bank Materi**, cari `musyawarah` dan pilih judul **Memilih kegiatan lewat musyawarah**. Baca pertanyaan diskusinya, lalu periksa tautan rujukan di akhir materi.
2. Buka **Ruang Sesi**. Pilih materi itu di daftar template dan tekan **Muat template**, atau mulai dengan rancangan kosong. Sesuaikan sasaran peserta, tujuan, durasi, dan isi pertemuan. Pratinjau mengikuti suntingan. Jika mengganti template setelah menyunting, Anda dapat membatalkan penggantian.
3. Dari pratinjau, pilih **Pandu sesi ini**. Pembuka, bahasan utama, diskusi, dan tindak lanjut masing-masing menampilkan saran waktu sesuai durasi 20, 30, atau 45 menit. **Kembali ke editor** membawa kursor ke isian langkah yang sedang dibaca.
4. Di **Catatan sesi**, centang persiapan, tulis hasil dan pertanyaan tertunda, lalu catat apakah target sudah dicoba, kendalanya, dan langkah berikutnya. Buka **Ringkasan sesi**, pilih teksnya, lalu salin ke catatan pribadi.

**Draf hanya ada di halaman Ruang Sesi yang sedang terbuka.** Isian tetap ada saat berganti antara editor dan mode pandu. Salin ringkasan sebelum memuat ulang, menutup tab, atau berpindah halaman.

## Mulai lokal

Clone repository, lalu masuk ke folder proyek.

```bash
git clone https://github.com/yurnszzz/Ramu.git
cd Ramu
```

Buka `index.html` langsung di browser dan aktifkan JavaScript untuk mencoba Bank Materi dan Ruang Sesi. Setelah berkas proyek tersedia di perangkat, kedua halaman juga berfungsi secara luring. Tautan ke rujukan eksternal memerlukan koneksi internet.

Jika ingin memakai server lokal, jalankan Python dari folder proyek.

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Buka [localhost:8000](http://localhost:8000). Hentikan server dengan `Ctrl+C`. Nama perintah Python dapat berupa `python` atau `py -3`, mengikuti instalasi di perangkat.

## Teknologi dan batas materi

- **HTML** untuk struktur semantik dan navigasi tiga halaman.
- **CSS biasa** untuk tampilan meja kerja dengan lembar krem, catatan sage, aksen emas, dan bayangan tipis. Flexbox, grid, serta media query mengatur letak panel pada ponsel dan desktop.
- **JavaScript native** untuk menyaring materi, mengisi editor dari template, menampilkan langkah aktif, dan menyusun ringkasan dari isian mentor.

Ramu memakai HTML, CSS, dan JavaScript native. Semua data materi dan aset dimuat dari folder proyek. Aplikasi berjalan tanpa framework, proses build, backend, akun, database, API data, penyimpanan browser, timer, atau notifikasi. [Penerapan materi FE Basic](docs/COURSE_BASELINE.md)

## Struktur proyek

```text
Ramu/
├── index.html          # Bank Materi
├── sesi.html           # Ruang Sesi
├── panduan.html        # Panduan & Sumber
├── assets/
│   ├── css/            # Style bersama untuk ketiga halaman
│   └── js/             # Koleksi materi, filter, editor sesi, dan mode pandu
├── docs/               # Desain, batas materi, kurasi, dan hasil QA
│   └── assets/         # Aset dokumentasi README
├── planning/           # Daftar dan status tahap pengerjaan
├── README.md
└── LICENSE
```

Bank Materi dan editor membaca koleksi yang sama. Untuk mengikuti alur di kode, mulai dari data paket, filter Bank Materi, editor, lalu mode pandu. [Koleksi materi](assets/js/materi.js) · [Filter Bank Materi](assets/js/bank-materi.js) · [Editor sesi](assets/js/sesi.js) · [Mode pandu](assets/js/pandu.js)

## Tahap pengerjaan

Fondasi tiga halaman, Bank Materi, penyusun sesi, serta mode pandu dan evaluasi sudah masuk ke `main` melalui empat pull request. T05 mencakup pemeriksaan akhir dan dokumentasi. Status setiap tahap serta hasil uji browser tersedia di [daftar tahap](planning/TASKS.md) dan [catatan QA](docs/QA.md).

## Materi dan lisensi

Setiap paket menyertakan rujukan ayat atau hadis yang dapat diperiksa. Contoh situasi, pertanyaan, dan tindak lanjut merupakan bahan latihan mentor. [Panduan konten](docs/CONTENT_GUIDE.md)

Dikembangkan oleh Hasan Shofiyyurrahman. Kode proyek menggunakan lisensi MIT. Sumber bacaan pihak ketiga mengikuti ketentuan dan atribusinya masing-masing. [Profil pengembang](https://github.com/yurnszzz) · [Repository publik Ramu](https://github.com/yurnszzz/Ramu) · [Lisensi MIT](LICENSE)
