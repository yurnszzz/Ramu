<p align="center">
  <img src="assets/ramu-banner.svg" alt="Ramu — ruang kerja mentor. Bahan terarah, pertemuan bermakna." width="1100">
</p>

Ramu membantu mentor pembinaan Islam memilih bahan diskusi, memandu pertemuan, dan membawa pulang catatan hasilnya. Proyek ini merupakan final project **Frontend Basic KSM Veterantech**.

## Halaman

| Halaman | Peran dalam Ramu |
| --- | --- |
| [Bank Materi](index.html) | Mencari delapan paket pembinaan berdasarkan judul atau ringkasan, menyaring kategori, dan membaca rujukan tiap materi. |
| [Ruang Sesi](sesi.html) | Menyusun sesi, memandu empat langkah pertemuan, mencatat hasil diskusi, dan menyalin ringkasan. |
| [Panduan & Sumber](panduan.html) | Penjelasan cara pakai, batas draf, dan prinsip kurasi. |

## Contoh satu pertemuan

1. Di **Bank Materi**, cari `musyawarah` dan pilih **Memilih kegiatan lewat musyawarah**. Baca pertanyaan diskusi dan rujukannya.
2. Buka **Ruang Sesi**, pilih materi yang sama, lalu tekan **Muat template**. Sesuaikan pertanyaan dengan peserta dan pilih durasi 20, 30, atau 45 menit. Anda juga bisa menyusun sesi dari awal.
3. Dari pratinjau, pilih **Pandu sesi ini** untuk mengikuti pembuka, bahasan utama, diskusi, dan tindak lanjut beserta alokasi waktunya. **Kembali ke editor** membawa kursor ke isian langkah yang sedang dibaca.
4. Di **Catatan sesi**, tulis hasil pertemuan, pertanyaan tertunda, dan evaluasi target. Buka **Ringkasan sesi**, pilih teksnya, lalu salin ke catatan pribadi.

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

Buka [localhost:8000](http://localhost:8000). Hentikan server dengan `Ctrl+C`. Di Windows, perintah Python bisa berupa `py -3`.

## Struktur kode

Ramu memakai HTML semantik, CSS biasa, dan JavaScript native. Ketiga halaman berbagi satu stylesheet. Bank Materi dan penyusun sesi membaca koleksi yang sama dari `materi.js`.

```text
Ramu/
├── index.html          # Bank Materi
├── sesi.html           # Ruang Sesi
├── panduan.html        # Panduan & Sumber
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── materi.js
│   │   ├── bank-materi.js
│   │   ├── sesi.js
│   │   └── pandu.js
│   ├── favicon.svg
│   ├── ramu-logo-inverse.svg
│   └── ramu-banner.svg
├── README.md
└── LICENSE
```

## Materi dan lisensi

Setiap paket menyertakan rujukan ayat atau hadis yang dapat diperiksa. Contoh situasi, pertanyaan, dan tindak lanjut merupakan bahan latihan mentor. [Daftar sumber](panduan.html#sumber)

Dikembangkan oleh Hasan Shofiyyurrahman. Kode proyek menggunakan lisensi MIT. Sumber bacaan pihak ketiga mengikuti ketentuan dan atribusinya masing-masing. [Lisensi MIT](LICENSE)
