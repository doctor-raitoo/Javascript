const mahasiswa = {
    namaDepan: 'Rhaditya',
    namaBelakang: 'Prastito',
    nim: 2405181049,
    jurusan: 'Teknik Komputer dan Informatika',
    prodi: 'Teknologi Rekayasa Perangkat Lunak'
};

// mengakses properti menggunakan dot notation
console.log(mahasiswa.namaDepan);

// mengakses properti menggunakan square bracket
console.log(mahasiswa['jurusan']);

// mengakses menggunakan destructuring object
const {namaDepan, namaBelakang} = mahasiswa;
console.log(namaDepan, namaBelakang);

// mengubah nilai properti
mahasiswa.prodi = 'Teknik Elektro';
console.log(mahasiswa.prodi);

// menghapus properti
delete mahasiswa.prodi;
console.log(mahasiswa);

