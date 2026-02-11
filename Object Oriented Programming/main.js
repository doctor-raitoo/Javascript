class Samsung {
    constructor (type, year) {
        this.type = type;
        this.year = year;
    }
    gaming() {
        console.log(`${this.type} have a good gaming performance`);
    }
}

const Samsung1 = new Samsung ('Samsung S23 Ultra', 2024);
const Samsung2 = new Samsung ('Samsung S25 Ultra', 2026);

console.log(Samsung1.type);
console.log(Samsung2.type);

Samsung1.gaming();
Samsung2.gaming();