# Alur Git

Repository: <https://github.com/yurnszzz/Ramu>. Branch utama: `main`.

## Per tahap

1. Periksa `git status`, branch, remote, dan apakah PR sebelumnya sudah merge.
2. Mulai branch fitur dari main terbaru; pertahankan perubahan lokal yang belum dicommit.
3. Kerjakan satu tahap sesuai `planning/TASKS.md`. Periksa kode dan browser.
4. Stage path yang sengaja diubah, lalu jalankan pemeriksaan berikut:

   ```bash
   python3 scripts/design_skills.py check-git
   git diff --cached --check
   git diff --cached --stat
   ```

5. Baca diff lengkap, commit dengan ringkasan yang konkret, lalu push branch.
6. Buka PR ke `main`, jelaskan perubahan, validasi, batas pengujian, dan langkah review.
7. Set task ke `READY_FOR_REVIEW`. Pemilik melakukan review dan merge sebelum tahap berikutnya.

Pakai identitas Git yang sudah dikonfigurasi pengguna. Jangan membuat commit mundur tanggal, riwayat palsu, force push, atau mengganti origin tanpa alasan dan otorisasi.

## Isi repository

Source HTML/CSS/JS, aset produk yang disetujui, aset README, lisensi, dan dokumen proyek boleh diterbitkan. File kelas asli, kandidat logo yang belum disetujui, skill, kredensial, screenshot QA sementara, profil browser, cache, dan catatan lokal tetap di luar Git.

PRD dipertahankan sampai finalisasi T05. Menghapusnya dari versi akhir tidak menghapus commit historis; jangan rewrite riwayat untuk menyembunyikan pekerjaan.
