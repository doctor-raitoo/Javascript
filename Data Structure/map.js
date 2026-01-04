const makanan = new Map([
    ['Bakso', 10000],
    ['Mie Ayam', 12000],
    ['Es Teh', 5000]
]);

//menyimpan nilai ke dalam map
makanan.set('Jus Mangga', 7000);

//mengakses nilai di dalam map
console.log(makanan.get('Bakso'));

//menghapus nilai
makanan.delete('Mie Ayam');

console.log(makanan);