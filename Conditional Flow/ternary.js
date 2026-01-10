const hargaBarang = 8000;
const pakaiVoucher = true;

// kondisi ? value1:value2
let hargaSetelahDiskon = pakaiVoucher ? 5000 : 0;

console.log(`Total yang harus dibayar adalah: ${hargaBarang - hargaSetelahDiskon}`);

