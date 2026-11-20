const editor = document.getElementById('editor-sesi');
const pilihanTemplate = document.getElementById('template-sesi');
const tombolMuat = document.getElementById('muat-template');
const konfirmasi = document.getElementById('konfirmasi-template');
const tombolBatal = document.getElementById('batal-template');
const statusTemplate = document.getElementById('status-template');
const durasi = document.getElementById('durasi-sesi');
const bagian = ['pembuka', 'bahasan', 'diskusi', 'tindak-lanjut'];
const alokasi = {
  20: [3, 7, 7, 3],
  30: [4, 11, 11, 4],
  45: [5, 17, 17, 6]
};
let templateMenunggu = null;

for (const materi of daftarMateri) {
  const opsi = document.createElement('option');
  opsi.value = materi.id;
  opsi.textContent = materi.judul;
  pilihanTemplate.append(opsi);
}

function tampilkanIsian(idKolom, idTujuan, saatKosong) {
  const nilai = document.getElementById(idKolom).value;
  document.getElementById(idTujuan).textContent = nilai.trim() ? nilai : saatKosong;
}

function perbaruiPratinjau() {
  tampilkanIsian('judul-sesi', 'pratinjau-judul', 'Sesi tanpa judul');
  tampilkanIsian('sasaran-sesi', 'pratinjau-sasaran', 'Belum ditentukan');
  tampilkanIsian('tujuan-sesi', 'pratinjau-tujuan', 'Belum diisi');
  document.getElementById('pratinjau-durasi').textContent = durasi.value + ' menit';

  bagian.forEach(function (id, urutan) {
    tampilkanIsian(id, 'pratinjau-' + id, 'Belum diisi');
    document.getElementById('menit-' + id).textContent = alokasi[durasi.value][urutan] + ' menit';
  });
}

function tutupKonfirmasi() {
  konfirmasi.hidden = true;
  templateMenunggu = null;
}

function isiTemplate(materi) {
  const isian = {
    'judul-sesi': materi.judul,
    'tujuan-sesi': materi.tujuan,
    pembuka: materi.pembuka,
    bahasan: materi.pokokBahasan.join('\n\n'),
    diskusi: materi.pertanyaan.join('\n\n'),
    'tindak-lanjut': materi.tindakLanjut
  };
  for (const id of Object.keys(isian)) {
    const kolom = document.getElementById(id);
    kolom.value = isian[id];
    // Simpan nilai awal template di form untuk mengenali suntingan berikutnya.
    kolom.defaultValue = isian[id];
  }
  tutupKonfirmasi();
  perbaruiPratinjau();
  statusTemplate.textContent = 'Template dimuat: ' + materi.judul + '.';
  document.getElementById('judul-sesi').focus();
}

pilihanTemplate.addEventListener('change', function () {
  tutupKonfirmasi();
  tombolMuat.disabled = !pilihanTemplate.value;
  statusTemplate.textContent = '';
});

tombolMuat.addEventListener('click', function () {
  const materi = daftarMateri.find(function (item) {
    return item.id === pilihanTemplate.value;
  });
  if (!materi) return;

  // Sasaran dan durasi dipertahankan saat template diganti.
  const kolomTemplate = ['judul-sesi', 'tujuan-sesi', ...bagian];
  const disunting = kolomTemplate.some(function (id) {
    const kolom = document.getElementById(id);
    return kolom.value !== kolom.defaultValue;
  });
  if (disunting) {
    templateMenunggu = materi;
    konfirmasi.hidden = false;
    statusTemplate.textContent = 'Konfirmasi untuk memuat ' + materi.judul + '.';
    tombolBatal.focus();
  } else {
    isiTemplate(materi);
  }
});

document.getElementById('ganti-template').addEventListener('click', function () {
  if (templateMenunggu) isiTemplate(templateMenunggu);
});
tombolBatal.addEventListener('click', function () {
  tutupKonfirmasi();
  statusTemplate.textContent = 'Draf dipertahankan.';
  tombolMuat.focus();
});

editor.addEventListener('submit', function (event) {
  event.preventDefault();
});
editor.addEventListener('input', function () {
  if (templateMenunggu) {
    tutupKonfirmasi();
    statusTemplate.textContent = '';
  }
  perbaruiPratinjau();
});
durasi.addEventListener('change', perbaruiPratinjau);

tombolMuat.disabled = !pilihanTemplate.value;
perbaruiPratinjau();
document.getElementById('ruang-interaktif').hidden = false;
