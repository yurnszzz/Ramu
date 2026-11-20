<p align="center">
  <img src="docs/assets/ramu-banner.svg" alt="Ramu — ruang kerja mentor. Bahan terarah, pertemuan bermakna." width="1100">
</p>

<p align="center">
  <a href="#mulai-lokal">Mulai lokal</a> ·
  <a href="#tahap-pengerjaan">Tahap pengerjaan</a> ·
  <a href="docs/DESIGN.md">Desain</a> ·
  <a href="LICENSE">Lisensi MIT</a>
</p>

Ramu adalah ruang kerja sederhana untuk mentor pembinaan Islam lintas komunitas: menyiapkan bahan, menyusun pertemuan, dan mendampingi diskusi dengan lebih terarah. Proyek ini dikerjakan sebagai final project **Frontend Basic KSM Veterantech**.

**Ramu menyediakan delapan bahan diskusi yang bisa diolah menjadi rancangan sesi.** Misalnya, cari `musyawarah` di Bank Materi untuk membaca latihan memilih kegiatan bersama. Buka Ruang Sesi, pilih **Memilih kegiatan lewat musyawarah**, lalu tekan **Muat template** untuk menyesuaikannya dengan kelompok Anda.

## Halaman

| Halaman | Peran dalam Ramu |
| --- | --- |
| [Bank Materi](index.html) | Tempat memilih bahan pembinaan. |
| [Ruang Sesi](sesi.html) | Menyusun sesi, memandu empat langkah pertemuan, mencatat hasil diskusi, dan menyalin ringkasan. |
| [Panduan & Sumber](panduan.html) | Penjelasan cara pakai, batas draf, dan prinsip kurasi. |

Tampilan memakai teal gelap, kertas krem, sage, serta aksen emas. Bayangan tipis dan lapisan kertas memberi kesan meja kerja yang tenang. Wordmark teks digunakan sambil menunggu persetujuan logo final.

## Mulai lokal

Clone repository, lalu masuk ke folder proyek.

```bash
git clone https://github.com/yurnszzz/Ramu.git
cd Ramu
```

Untuk mencoba mode pandu sebelum T04 masuk ke `main`, jalankan `git switch feat/t04-mode-pandu` setelah clone.

Buka `index.html` langsung di browser. Untuk menjalankannya melalui HTTP lokal, gunakan Python dari folder proyek.

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Buka [localhost:8000](http://localhost:8000). Hentikan server dengan `Ctrl+C`. Nama perintah Python dapat berupa `python` atau `py -3`, mengikuti instalasi di perangkat.

## Teknologi dan batas materi

- **HTML** untuk struktur semantik dan navigasi tiga halaman.
- **CSS biasa** untuk warna, tipografi, flex/grid, state fokus, dan media query.
- **JavaScript native** untuk menyaring materi, mengisi editor dari template, menampilkan langkah aktif, dan menyusun ringkasan dari isian mentor.

Ramu mengikuti materi FE Basic tanpa framework atau dependensi runtime. Tidak ada backend, akun, database, API data, penyimpanan browser, timer, atau notifikasi.

Dari pratinjau, pilih **Pandu sesi ini** untuk membawakan pembuka, bahasan utama, diskusi, dan tindak lanjut. Jika pertanyaan perlu diubah, **Kembali ke editor** membawa Anda ke isian langkah yang sedang dibaca. Centang persiapan dan isi catatan di halaman yang sama.

Rancangan dan catatan hanya tersedia selama halaman terbuka. Sebelum memuat ulang, menutup tab, atau berpindah halaman, pilih teks ringkasan sesi dan salin ke catatan pribadi.

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
├── planning/           # Kebutuhan produk dan tahap pengerjaan
├── README.md
└── LICENSE
```

Bank Materi dan editor memakai koleksi yang sama. Editor mengisi form dan memperbarui pratinjau. Mode pandu membaca isian terbaru dan merangkai ringkasan untuk disalin. Semua skrip dimuat secara lokal. Tautan rujukan dapat dibuka saat tersedia koneksi internet. [Koleksi materi](assets/js/materi.js) · [Filter Bank Materi](assets/js/bank-materi.js) · [Editor sesi](assets/js/sesi.js) · [Mode pandu](assets/js/pandu.js)

## Tahap pengerjaan

| Tahap | Cakupan | Status |
| --- | --- | --- |
| T01 | Tiga halaman, navigasi, fondasi CSS, dan layout responsif | Digabung ke `main` |
| T02 | Bank Materi: konten bersumber, pencarian, filter, dan detail | Digabung ke `main` |
| T03 | Penyusun sesi, template, durasi, dan pratinjau | Digabung ke `main` |
| T04 | Mode pandu, catatan, dan evaluasi sementara | Siap direview |
| T05 | Pemeriksaan akhir, dokumentasi, dan pembersihan proyek | Direncanakan |

Satu tahap dikerjakan melalui satu branch dan PR. Tahap berikutnya dimulai setelah PR sebelumnya merge. Detail acceptance ada di [daftar tugas](planning/TASKS.md); hasil pemeriksaan aktual dicatat di [QA](docs/QA.md).

## Materi dan lisensi

Ramu tidak membuat hukum agama atau mengklaim tinjauan ulama. Setiap materi yang ditambahkan harus mempunyai rujukan yang dapat diperiksa; lihat [panduan konten](docs/CONTENT_GUIDE.md).

Dikembangkan oleh [Hasan Shofiyyurrahman](https://github.com/yurnszzz). Kode proyek menggunakan [Lisensi MIT](LICENSE). Sumber materi pihak ketiga tetap mengikuti ketentuan dan atribusinya masing-masing.
