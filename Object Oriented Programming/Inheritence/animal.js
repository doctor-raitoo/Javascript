// superclass/induk
class Hewan {
    hidup = true;

    makan() {
        console.log(`${this.nama} sedang makan`);
    }
    tidur() {
        console.log(`${this.nama} sedang tidur`);
    }
}

// subclass/turunan
class Kuda extends Hewan {
    nama = 'Kuda';
}

class Rusa extends Hewan {
    nama = 'Rusa';
}

const kuda = new Kuda();
const rusa = new Rusa();

console.log(kuda.hidup);
kuda.makan();
kuda.tidur();
