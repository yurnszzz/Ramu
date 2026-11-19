# Tahap pengerjaan Ramu

Setiap tahap memakai satu branch dan satu PR. Mulai tahap berikutnya setelah PR sebelumnya digabung ke `main`.

| Tahap | Cakupan | Status |
| --- | --- | --- |
| T01 | Fondasi tiga halaman dan desain responsif | READY_FOR_REVIEW |
| T02 | Bank Materi interaktif dan konten bersumber | PLANNED |
| T03 | Penyusun sesi dan preview | PLANNED |
| T04 | Mode pandu, catatan, evaluasi | PLANNED |
| T05 | QA akhir, dokumentasi, dan pembersihan | PLANNED |

## T01 — Fondasi

- Tiga dokumen HTML nyata: Bank Materi, Ruang Sesi, Panduan & Sumber.
- Header, main, footer semantik; navigasi antarahalaman dan halaman aktif.
- CSS bersama mengikuti [panduan desain](../docs/DESIGN.md), dengan wordmark sementara dan fokus keyboard yang terlihat.
- Layout 360/768/1440px dan sanity check 320px tanpa overflow.
- Struktur terkelompok, README sesuai implementasi, banner animasi ringan, dan MIT.
- Fitur T02–T04 belum diimplementasikan; keterangan status jujur dan tidak ada kontrol palsu.
- Catat hasil pemeriksaan di [QA](../docs/QA.md) dan periksa daftar file sebelum push.

## T02 — Bank Materi

Minimal enam paket lengkap bersumber; array/object lokal via script biasa; pencarian judul/ringkasan dan kategori bersama; jumlah hasil; keadaan kosong; reset; panel detail dalam halaman. Verifikasi semua rujukan saat implementasi. Tautan Ruang Sesi tidak mengklaim transfer materi otomatis.

## T03 — Penyusun sesi

Dropdown template, pemuatan yang jelas, judul, sasaran, tujuan, empat bagian yang dapat diedit, dan preview DOM. Durasi 20/30/45 memakai alokasi 3/7/7/3, 4/11/11/4, 5/17/17/6. Konfirmasi inline saat mengganti template yang sudah diedit. Peringatan draf terlihat; tanpa penyimpanan permanen.

## T04 — Mode pandu dan evaluasi

Empat langkah dari input terbaru; sebelumnya/berikutnya dibatasi rentang; kembali editor mempertahankan input dan catatan dalam dokumen yang sama. Checklist persiapan, hasil pertemuan, pertanyaan tertunda, tindak lanjut, target/status/kendala/langkah berikutnya, dan ringkasan yang dapat disalin manual. Render input sebagai teks, bukan HTML. Tanpa timer atau pengingat.

## T05 — Finalisasi

Uji kriteria penerimaan pada PRD, layout responsif, navigasi keyboard, dan tautan sumber. Perbarui panduan dan README sesuai fitur yang selesai. Hapus PRD sementara setelah rangkumannya lengkap. Rapikan file kerja milik proyek, periksa isi Git dan tautan dokumentasi, lalu kumpulkan tautan repository publik melalui Dignition.
