const modeEditor = document.getElementById('mode-editor');
const modePandu = document.getElementById('mode-pandu');
const tombolPandu = document.getElementById('mulai-pandu');
const tombolSebelumnya = document.getElementById('sebelumnya');
const tombolBerikutnya = document.getElementById('berikutnya');
let langkahAktif = 0;

function labelIsian(id) {
  return document.getElementById(id).labels[0].textContent.trim();
}

function tampilkanLangkah(indeks) {
  langkahAktif = Math.max(0, Math.min(indeks, bagian.length - 1));
  const id = bagian[langkahAktif];
  const judulLangkah = document.getElementById('pandu-langkah');
  document.getElementById('pandu-sesi').textContent = nilaiIsian('judul-sesi', 'Sesi tanpa judul');
  document.getElementById('pandu-posisi').textContent = 'Langkah ' + (langkahAktif + 1) + ' dari ' + bagian.length;
  judulLangkah.textContent = labelIsian(id);
  document.getElementById('pandu-menit').textContent = alokasi[durasi.value][langkahAktif] + ' menit';
  document.getElementById('pandu-isi').textContent = nilaiIsian(id, 'Bagian ini belum diisi.');
  tombolSebelumnya.disabled = langkahAktif === 0;
  tombolBerikutnya.disabled = langkahAktif === bagian.length - 1;
  judulLangkah.focus();
}

tombolPandu.addEventListener('click', function () {
  modeEditor.hidden = true;
  modePandu.hidden = false;
  tampilkanLangkah(langkahAktif);
});
document.getElementById('kembali-editor').addEventListener('click', function () {
  modePandu.hidden = true;
  modeEditor.hidden = false;
  tombolPandu.focus();
});
tombolSebelumnya.addEventListener('click', function () {
  tampilkanLangkah(langkahAktif - 1);
});
tombolBerikutnya.addEventListener('click', function () {
  tampilkanLangkah(langkahAktif + 1);
});

function barisCatatan(id) {
  return labelIsian(id) + ': ' + nilaiIsian(id);
}

function perbaruiRingkasan() {
  const baris = [
    nilaiIsian('judul-sesi', 'Sesi tanpa judul'),
    'Sasaran peserta: ' + nilaiIsian('sasaran-sesi', 'Belum ditentukan'),
    barisCatatan('tujuan-sesi'),
    'Durasi: ' + durasi.value + ' menit',
    '', 'Alur pertemuan'
  ];
  bagian.forEach(function (id, urutan) {
    const menit = alokasi[durasi.value][urutan];
    baris.push((urutan + 1) + '. ' + labelIsian(id) + ' (' + menit + ' menit)', nilaiIsian(id));
  });
  baris.push('', 'Persiapan');
  for (const id of ['siap-tujuan', 'siap-rujukan', 'siap-pertanyaan']) {
    const tanda = document.getElementById(id).checked ? '[x]' : '[ ]';
    baris.push(tanda + ' ' + labelIsian(id));
  }
  baris.push('', 'Catatan pertemuan');
  for (const id of ['hasil-pertemuan', 'pertanyaan-tertunda', 'catatan-lanjut']) {
    baris.push(barisCatatan(id));
  }
  baris.push('', 'Evaluasi target');
  for (const id of ['target-pertemuan', 'status-target', 'kendala', 'langkah-berikut']) {
    baris.push(barisCatatan(id));
  }
  document.getElementById('ringkasan-sesi').value = baris.join('\n');
}

const ruangSesi = document.getElementById('ruang-interaktif');
ruangSesi.addEventListener('input', perbaruiRingkasan);
ruangSesi.addEventListener('change', perbaruiRingkasan);
perbaruiRingkasan();
