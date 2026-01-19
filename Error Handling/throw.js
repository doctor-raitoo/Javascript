const harga = 100000;
const bayar = 55000;

if (bayar < harga){
    throw new Error ('Jumlah yang dibayarkan kurang');
}

