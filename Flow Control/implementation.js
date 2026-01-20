function cekNilai (nilai1) {
    for (let i = 0; i < nilai1.length; i++) {
        if (typeof nilai1[i] !== 'number') {
            throw new Error ('Masukan tidak valid')
        }
        const nilai = nilai1[i];
        let predikat;

        if (nilai >= 90) {
            predikat = 'A';
        } else if (nilai >= 80) {
            predikat = 'B';
        } else if (nilai >= 70) {
            predikat = 'C';
        } else if (nilai >= 60) {
            predikat = 'D';
        } else {
            predikat = 'E';
        }
        console.log(`Nilai ${i + 1}: ${nilai} (${predikat})`);
    }
}

try {
    const nilaiMhs = [95, 85, 65, 80, 70];
    cekNilai(nilaiMhs);
} catch (e) {
    console.log(e);
}