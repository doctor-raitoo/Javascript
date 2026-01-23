function categorizeNumber(input) {
if (typeof input !== 'number' || !Number.isInteger(input)) {
    throw new Error('Input harus berupa bilangan bulat');
}

if (input === 0) return 'Nol';
if (input < 0) return 'Negatif';

const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

if (isPrime(input)) return 'Prima';

return input % 2 === 0 ? 'Genap' : 'Ganjil';
}

console.log(categorizeNumber(15)); 
console.log(categorizeNumber(12)); 
console.log(categorizeNumber(17)); 
console.log(categorizeNumber(0)); 
console.log(categorizeNumber(-5));
