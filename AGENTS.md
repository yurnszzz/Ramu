# Aturan kerja Ramu

Panduan ini disusun dari paket referensi Ramu yang tersedia pada 16 November 2026. Paket awal belum memuat AGENTS.md atau folder planning; instruksi di sini merangkum Ramu-Prompt-Codex.md dan PRD, bukan salinan dokumen yang hilang.

## Baca sebelum bekerja

Baca `planning/CODEX_START.md`, `planning/PRD.md`, `planning/TASKS.md`, serta dokumen dalam `docs/`. Gunakan `planning/DESIGN_BOARD.html` sebagai referensi visual, bukan kode produk.

## Batas implementasi

- HTML semantik, CSS biasa, dan JavaScript native sesuai FE Basic. Kode harus ringkas dan dapat dijelaskan saat presentasi.
- Tanpa framework, backend, database, akun, storage browser, fetch/API data, timer, notifikasi, atau AI pembuat hukum agama.
- Tiga dokumen: `index.html`, `sesi.html`, `panduan.html`. Gunakan navigasi tautan nyata.
- Palet dan materi yang ditetapkan proyek mengalahkan rekomendasi skill. Gunakan wordmark HTML sampai logo disetujui.
- Jangan mengarang dalil, sumber, statistik, endorsement, atau status review agama.
- Draf fitur berikutnya hanya hidup dalam dokumen yang terbuka; jelaskan kehilangan draf saat reload atau pindah halaman.

## Alur kerja

- Kerjakan satu tahap per branch dan PR. Mulai tahap berikutnya hanya setelah PR sebelumnya benar-benar merge.
- T01 hanya fondasi halaman, navigasi, CSS, struktur, dan layout responsif. Jangan menambahkan fitur T02–T04.
- Periksa status, branch, remote, dan diff sebelum commit. Pakai identitas Git pengguna yang sudah dikonfigurasi; jangan memalsukan riwayat atau waktu commit.
- Commit hanya source, aset yang boleh diterbitkan, dan dokumentasi yang diperlukan. Jangan memasukkan file kelas asli, skill, kredensial, cache, atau screenshot pemeriksaan sementara.
- Periksa 320, 360, 768, dan 1440px, navigasi, keyboard, tautan, serta batas materi. Catat hasil aktual di `docs/QA.md`.
- Set tahap ke `READY_FOR_REVIEW` hanya setelah implementasi dan pemeriksaan selesai; jangan menandainya merge sendiri.
- Pertahankan PRD sampai T05. Pembersihan skill hanya boleh menyentuh salinan milik Ramu.

## Skill desain

Baca `docs/SKILLS_SETUP.md`. Simpan Impeccable, UI UX Pro Max, dan design-taste-frontend secara lokal dan abaikan dari Git. Gunakan sebagai panduan hierarki, aksesibilitas, dan ketelitian visual; jangan memasukkan framework, animasi, atau fitur tambahan karena rekomendasinya.
