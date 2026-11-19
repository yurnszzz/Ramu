const formFilter = document.getElementById('filter-materi');
const kolomCari = document.getElementById('cari-materi');
const pilihanKategori = document.getElementById('kategori-materi');
const daftar = document.getElementById('daftar-materi');
const jumlah = document.getElementById('jumlah-materi');
const pesanKosong = document.getElementById('kosong-materi');
const panel = document.getElementById('detail-materi');
const judulDetail = document.getElementById('judul-detail');
const isiDetail = document.getElementById('isi-detail');
let tombolAktif = null;

function buatTeks(tag, teks) {
  const elemen = document.createElement(tag);
  elemen.textContent = teks;
  return elemen;
}

function tutupDetail() {
  panel.hidden = true;
  if (tombolAktif) {
    tombolAktif.setAttribute('aria-expanded', 'false');
    tombolAktif.textContent = 'Baca materi';
    tombolAktif.setAttribute('aria-label', 'Baca materi: ' + judulDetail.textContent);
  }
  tombolAktif = null;
}

function tambahDaftar(judul, baris) {
  const poin = document.createElement('ul');
  for (const teks of baris) poin.append(buatTeks('li', teks));
  isiDetail.append(buatTeks('h3', judul), poin);
}

function bukaDetail(materi, tombol) {
  tutupDetail();
  judulDetail.textContent = materi.judul;
  isiDetail.replaceChildren(
    buatTeks('p', materi.ringkasan),
    buatTeks('h3', 'Tujuan pertemuan'), buatTeks('p', materi.tujuan),
    buatTeks('h3', 'Pembuka'), buatTeks('p', materi.pembuka)
  );
  tambahDaftar('Pokok bahasan', materi.pokokBahasan);
  tambahDaftar('Pertanyaan diskusi', materi.pertanyaan);
  const sumber = buatTeks('a', materi.sumber.label);
  sumber.href = materi.sumber.url;
  isiDetail.append(
    buatTeks('h3', 'Tindak lanjut'), buatTeks('p', materi.tindakLanjut),
    buatTeks('h3', 'Sumber bacaan'), sumber
  );
  tombolAktif = tombol;
  tombol.setAttribute('aria-expanded', 'true');
  tombol.textContent = 'Tutup materi';
  tombol.setAttribute('aria-label', 'Tutup materi: ' + materi.judul);
  panel.hidden = false;
  judulDetail.focus();
}

function buatKartu(materi) {
  const kartu = document.createElement('article');
  kartu.className = 'kartu-materi';
  const kategori = buatTeks('p', materi.kategori);
  kategori.className = 'kategori-label';
  const tombol = buatTeks('button', 'Baca materi');
  tombol.type = 'button';
  tombol.className = 'detail-link';
  tombol.setAttribute('aria-label', 'Baca materi: ' + materi.judul);
  tombol.setAttribute('aria-controls', 'detail-materi');
  tombol.setAttribute('aria-expanded', 'false');
  tombol.addEventListener('click', function () {
    if (tombol === tombolAktif) tutupDetail();
    else bukaDetail(materi, tombol);
  });
  kartu.append(kategori, buatTeks('h3', materi.judul), buatTeks('p', materi.ringkasan), tombol);
  return kartu;
}

function tampilkanHasil() {
  const kata = kolomCari.value.trim().toLowerCase();
  const kategori = pilihanKategori.value;
  const hasil = daftarMateri.filter(function (materi) {
    const teks = (materi.judul + ' ' + materi.ringkasan).toLowerCase();
    return teks.includes(kata) && (!kategori || materi.kategori === kategori);
  });

  tutupDetail();
  daftar.replaceChildren();
  for (const materi of hasil) daftar.append(buatKartu(materi));
  pesanKosong.hidden = hasil.length > 0;
  jumlah.textContent = hasil.length + ' dari ' + daftarMateri.length + ' materi';
}

kolomCari.addEventListener('input', tampilkanHasil);
pilihanKategori.addEventListener('change', tampilkanHasil);
formFilter.addEventListener('submit', function (event) {
  event.preventDefault();
  tampilkanHasil();
});
formFilter.addEventListener('reset', function (event) {
  event.preventDefault();
  kolomCari.value = '';
  pilihanKategori.value = '';
  tampilkanHasil();
  kolomCari.focus();
});
document.getElementById('tutup-detail').addEventListener('click', function () {
  const pemicu = tombolAktif;
  tutupDetail();
  if (pemicu) pemicu.focus();
});

tampilkanHasil();
document.getElementById('bank-interaktif').hidden = false;
