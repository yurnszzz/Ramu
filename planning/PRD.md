# PRD Ramu — versi finpro FE Basic

Tanggal rancangan: 16 November 2026. Pemilik: Yurnsz. Status: disetujui secara arah; spesifikasi kerja untuk implementasi. Dokumen ini sementara dan boleh dihapus dari versi akhir setelah fakta produk dipindahkan ke README.

## 1. Latar belakang

Mentor pembinaan Islam sering perlu mengumpulkan bahan dari beberapa tempat, menyusun alur pertemuan, mencari pertanyaan yang dekat dengan kehidupan peserta, lalu mencatat hasil diskusi. Ramu menyatukan persiapan dan panduan sesi dalam website sederhana untuk mentor lintas lembaga dakwah. Palet terinspirasi referensi pengguna, tetapi identitas Ramu berdiri sendiri dan tidak menyatakan afiliasi resmi dengan Arrisalah.

Proyek sekaligus menunjukkan penerapan HTML, CSS, DOM JavaScript, responsive design, dan workflow Git yang telah dipelajari di KSM Veterantech. Keberhasilan tidak diukur dari banyaknya integrasi.

## 2. Sasaran dan keberhasilan

Mentor dapat menemukan satu paket materi, mengubahnya menjadi rundown, membawakan diskusi lewat mode pandu, dan menyalin hasil evaluasi sementara. Semua alur utama harus bekerja tanpa akun dan tanpa layanan data eksternal.

Selesai bila tiga halaman terhubung, pencarian/filter/detail berfungsi, editor menghasilkan panduan sesuai input, pergantian mode tidak menghapus isian, keterbatasan draf jelas, tampilan dapat dipakai pada ponsel, serta repo publik memiliki riwayat branch/PR yang nyata.

## 3. Pengguna

Utama: mentor/pembina mahasiswa pada LDK, LDF, dan komunitas belajar Islam. Pengguna mungkin menyiapkan sesi melalui laptop lalu membaca melalui HP, tetapi versi ini tidak menyediakan pemindahan draf antardevice. Konten memakai bahasa Indonesia sederhana. Tidak ada akun peserta atau dashboard admin.

## 4. Halaman dan navigasi

| Halaman | Tujuan | Isi utama |
|---|---|---|
| `index.html` — Bank Materi | Memilih bahan pembinaan | Pencarian, filter kategori, daftar materi, detail dan sumber |
| `sesi.html` — Ruang Sesi | Menyiapkan dan menjalankan satu pertemuan | Pilihan template, tujuan, durasi, rundown, mode pandu, catatan/evaluasi |
| `panduan.html` — Panduan & Sumber | Memahami cara pakai dan sumber | Petunjuk, batas draf sementara, metode kurasi, referensi |

Navbar konsisten, menandai halaman aktif, dan tetap terbaca pada mobile. Halaman pertama langsung membantu mencari materi. Tidak perlu halaman pemasaran terpisah.

## 5. Fitur prioritas

### F01 Bank Materi

- Minimal enam paket selesai: dua kontekstual, dua tema dasar, dua rujukan Arba’in. Delapan paket menjadi target jika sumber dan pengerjaan memungkinkan.
- Setiap paket mempunyai ID, judul, kategori, ringkasan, tujuan, pembuka, pokok bahasan, pertanyaan diskusi, tindak lanjut, dan sumber.
- Input pencarian judul/ringkasan dan dropdown kategori dapat dipakai bersamaan.
- Jumlah hasil dan keadaan kosong jelas. Tombol reset filter mengembalikan semua materi.
- Detail muncul dalam halaman yang sama melalui panel yang bisa dibuka/ditutup. Hindari modal custom yang menambah kompleksitas.
- Label “Kontekstual” berarti dekat dengan isu keseharian, bukan klaim sedang viral hari ini. Pembaruan dikerjakan manual dalam file data.

### F02 Penyusun sesi

- Mentor memilih template dari dropdown di Ruang Sesi, kemudian menekan “Muat template”. Pilihan dari Bank Materi tidak otomatis dibawa lintas halaman; tautannya bernama “Buka Ruang Sesi”, tanpa klaim transfer.
- Form: judul, sasaran peserta (isian singkat), tujuan, pilihan durasi 20/30/45 menit, serta empat bagian rundown.
- Alokasi sederhana tetap: 20 menit = 3/7/7/3; 30 = 4/11/11/4; 45 = 5/17/17/6. Jelaskan bahwa ini saran pembagian, bukan timer.
- Mentor dapat mengubah isi template. Preview memantulkan input melalui DOM.
- Memuat template lain ketika form telah diubah harus menjelaskan bahwa isi template akan diganti; gunakan konfirmasi inline jika diperlukan.
- Tidak ada tombol “Simpan” yang mengesankan persistence. Helper draf sementara selalu terlihat di area kerja.

### F03 Mode Pandu

- Empat langkah: Pembuka, Bahasan utama, Diskusi, Tindak lanjut.
- Menampilkan judul langkah, teks dari form terbaru, alokasi menit, dan posisi seperti “2 dari 4”.
- Tombol sebelumnya/berikutnya memiliki batas; tidak melewati langkah pertama/terakhir.
- Kembali ke editor mempertahankan seluruh input dan catatan dalam dokumen yang sama.

### F04 Catatan, persiapan, evaluasi

- Checklist persiapan: tujuan jelas, rujukan diperiksa, pertanyaan siap.
- Catatan mentor: hasil pertemuan, pertanyaan tertunda, dan tindak lanjut.
- Mutabaah versi dasar adalah evaluasi target pertemuan: target yang disepakati, status dicoba/belum, kendala, langkah berikutnya. Bukan rekap ibadah pekanan tersimpan atau ranking peserta.
- Ringkasan teks biasa yang dapat disalin manual. Input diperlakukan sebagai teks, tidak sebagai HTML.
- Satu kolom “Rencana pertemuan berikutnya” boleh memuat tanggal yang diisi pengguna, tanpa pengingat otomatis.

### F05 Panduan dan sumber

- Cara memilih materi, membuat sesi, menggunakan mode pandu, dan menyalin ringkasan.
- Penjelasan bahwa halaman tidak menyimpan draf setelah reload atau perpindahan dokumen.
- Sumber konten dapat dibuka. Rujukan berbeda dari status review; jangan mengklaim tinjauan ulama tanpa bukti.
- Jadwal salat cukup tautan rujukan resmi yang diverifikasi saat implementasi; tidak ada widget jam salat atau lokasi otomatis.

## 6. Di luar cakupan

Tidak ada backend, database, login, penyimpanan browser, API eksternal, feed tren otomatis, AI pembuat hukum, notifikasi, countdown, attendance database, pengiriman catatan ke mentor lain, sinkronisasi, dan leaderboard amalan. Framework tetap tidak dipakai meski tugas memperbolehkannya.

## 7. State dan alur

Data konten adalah array/object lokal yang dimuat lewat script biasa. State pengguna berada dalam variabel/elemen form pada Ruang Sesi. Tab atau mode hanya mengganti tampilan DOM. Jika pengguna menuju halaman lain, draf tidak dijamin bertahan. UI menyatakan batas ini sebelum pengguna bekerja; jangan mengandalkan perilaku browser yang kadang memulihkan form.

## 8. Tampilan dan aksesibilitas

Acuan tetap: `docs/DESIGN.md`. Skeuomorphism lembut, teal gelap, kertas krem, emas sebagai aksen. Body 16px atau lebih, label terlihat, fokus keyboard, struktur heading terurut, tombol sekitar 44px untuk sentuh. Layout diuji 360, 768, dan 1440px serta sanity check 320px. Tidak ada overflow horizontal halaman.

## 9. Konten dan aset

Baca `docs/CONTENT_GUIDE.md`. Jangan membuat dalil, tanggal trending, atau label verified. Gambar/logo akhir disediakan atau disetujui pengguna; sebelum itu gunakan HTML wordmark. Website harus tetap layak tanpa foto dekoratif. Aset sumber berlisensi dipertahankan atribusinya.

## 10. Acceptance utama

1. Ketiga halaman nyata saling terhubung dan mempunyai header/main/footer semantik.
2. Search dan kategori bekerja bersamaan serta menampilkan keadaan tanpa hasil.
3. Data template mengisi empat bagian yang dapat diedit.
4. Durasi selalu berjumlah tepat 20, 30, atau 45 sesuai pilihan.
5. Mode Pandu memakai input terbaru dan posisi tidak keluar rentang.
6. Catatan tetap ada ketika ganti mode dalam sesi; tidak ada klaim penyimpanan permanen.
7. Teks seperti `<img onerror=...>` dalam catatan tampil sebagai teks.
8. Ada minimal enam materi bersumber dan tak ada placeholder publik yang mengaku siap.
9. Seluruh navigasi, form, fokus, dan layout dapat dipakai di mobile maupun keyboard.
10. Tidak ada dependensi framework, storage, atau panggilan API produk.
11. Tiap tahap mempunyai branch/PR/commit yang benar-benar dikerjakan, bukan dibuat setelah semua kode selesai.
12. Skill tidak terlacak Git, README akurat, MIT tersedia, dan PRD dibersihkan setelah finalisasi.

## 11. Pengembangan berikutnya

Setelah finpro: keputusan baru untuk penyimpanan, backend/sinkronisasi, kurasi bersama, pengingat, dan integrasi tren. Tidak ada pekerjaan ini dalam estimasi atau acceptance versi sekarang.
