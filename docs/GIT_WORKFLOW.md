# Alur Git

Repository: <https://github.com/yurnszzz/Ramu>. Branch utama: `main`.

## Per tahap

1. Periksa `git status`, branch, remote, dan apakah PR sebelumnya sudah merge.
2. Mulai branch fitur dari main terbaru; pertahankan perubahan lokal yang belum dicommit.
3. Kerjakan satu tahap sesuai `planning/TASKS.md`. Periksa kode dan browser.
4. Stage path yang sengaja diubah, lalu jalankan pemeriksaan berikut:

   ```bash
   git ls-files -ci --exclude-standard
   git diff --cached --check
   git diff --cached --stat
   ```

5. Pastikan perintah pertama tidak menampilkan file. Baca diff lengkap, commit dengan ringkasan yang konkret, lalu push branch.
6. Buka PR ke `main`, jelaskan perubahan, validasi, batas pengujian, dan langkah review.
7. Set task ke `READY_FOR_REVIEW`. Pemilik melakukan review dan merge sebelum tahap berikutnya.

Pakai identitas Git yang sudah dikonfigurasi pengguna. Jangan membuat commit mundur tanggal, riwayat palsu, force push, atau mengganti origin tanpa alasan dan otorisasi.

## Isi repository

Terbitkan kode, aset yang disetujui, lisensi, dan dokumentasi yang membantu pembaca menjalankan atau meninjau proyek. Simpan materi kelas asli, kandidat logo, kredensial, dan hasil pengujian sementara di workspace lokal.

PRD dipertahankan sampai finalisasi T05. Menghapusnya dari versi akhir tidak menghapus commit historis; jangan rewrite riwayat untuk menyembunyikan pekerjaan.
