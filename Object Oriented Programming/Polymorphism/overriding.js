class Smartphone {
    constructor(warna, brand, model) {
        this.warna = warna;
        this.brand = brand;
        this.model = model;
    }
    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class Android extends Smartphone {
    //overriding constructor
    constructor(warna, brand, model, device) {
        super(warna, brand, model);
        this.device = device;
    }

    splitScreen() {
        console.log('Android memiliki fitur split screen');
    }
}

const android = new Android('white', 'B', 'Galaxy S21', 'Smart TV')