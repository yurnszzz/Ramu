# Referensi desain lokal

Tiga skill membantu pemeriksaan desain, bukan dependensi website:

| Skill | Peran |
| --- | --- |
| Impeccable | Hierarki, keterbacaan, material, dan review visual |
| UI UX Pro Max | Navigasi, keyboard, kontras, dan layout responsif |
| design-taste-frontend | Ketelitian tipografi dan komposisi |

Ramu adalah ruang kerja, bukan landing page pemasaran. Kebutuhan gambar, framework, hero, library animasi, atau perubahan palet dari skill tidak diterapkan jika bertentangan dengan brief. `docs/DESIGN.md` dan batas FE Basic tetap menjadi acuan.

## Memasang dari referensi sendiri

```powershell
python3 scripts/design_skills.py install --from-project 'PATH/KE/PROYEK-REFERENSI'
python3 scripts/design_skills.py status
python3 scripts/design_skills.py check-git
```

Installer mencari ketiga nama dalam `.agents/skills`, `.codex/skills`, `.claude/skills`, atau `.agent/skills` milik referensi. Semua sumber harus tersedia sebelum penyalinan. Folder sumber tidak diubah. Salinan yang sudah ada dipertahankan.

Salinan Ramu berada dalam `.agents/skills/`, diabaikan oleh Git. Baca `SKILL.md` masing-masing secara eksplisit bila tidak terdeteksi otomatis. Installer ini disusun ulang karena paket awal tidak memuat installer atau versi upstream yang dipatok; ia tidak mengklaim menyediakan versi upstream tertentu dan tidak mengunduh skill otomatis.

Saat finalisasi T05, matikan instalasi dengan marker lokal `.local/skills-disabled` dan hapus hanya tiga salinan milik Ramu setelah memeriksa path absolutnya. Jangan mengubah instalasi global atau proyek referensi. Menjalankan website tidak membutuhkan skill ini.
