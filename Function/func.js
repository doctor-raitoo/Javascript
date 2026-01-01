//fungsi 
function konversiSuhu( temp = 0) { //set default parameter
    const fahrenheit = 9 / 5 * temp + 32;
    
    console.log('Hasil konversi dari celsius ke fahrenheit: ', fahrenheit);
}

const temp = 31;

//menjalankan isi fungsi (menggunakan parameter)
konversiSuhu(temp);

//menggunakan argument -> langsung masukkan nilai/datanya 
konversiSuhu();


