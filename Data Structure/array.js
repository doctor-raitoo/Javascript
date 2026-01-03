//object constructor
const array = new Array(5);
console.log(array);

//array.form
const hello = Array.from('hello');
console.log(hello);

//menyalin array menggunakan array.form
const pegawai = new Array('Arie', 'Budi', 'Setiadi', 'Cecep');
const pengguna = Array.from(pegawai);
console.log(pengguna);

//array literals (cara paling mudah)
const pohon = ['Pinus', 'Karet', 'Sawit', 'Cemara', 'Gelodokan'];
//mengubah elemen dalam array
pohon[1] = 'Mangga';
//menambahkan elemen
pohon.push('Durian');
//menghapus elemen
delete pohon[2];
//method reverse (membalikkan nilai array)
pohon.reverse();
//method sort (mengurutkan nilai array)
pohon.sort();
//mengakses elemen array menggunakan indeks
console.log('Pohon', pohon[1]);

//array destructuring
const pelukis = ['Van Gogh', 'Starry Night'];
const [nama, karya] = pelukis;
console.log(nama);

