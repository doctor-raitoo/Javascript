// penggunaan spread operator pada object
const identitasMhs = {
    Nama: 'Rhaditya',
    NIM: 12345678, 
    Jenis_Kelamin: 'Laki-laki'
};

const identitasMhs2 = {
    Kampus: 'Politeknik Negeri Medan',
    Departemen: 'Teknik', 
    Jurusan: 'Teknik Komputer dan Informatika', 
    Program_Studi: 'Teknologi Rekayasa Perangkat Lunak'
};

const mahasiswa = {...identitasMhs, ...identitasMhs2};

console.log(mahasiswa);

// penggunaan pada array
const identitas = ['Rhadit'];
const alamatPengiriman = ['Ekspedisi JNT', 'Sumatera Utara', 'Kota Medan', 'Jalan Mawar 123'];

const detailPengiriman = [...identitas, ...alamatPengiriman];

console.log(detailPengiriman);

