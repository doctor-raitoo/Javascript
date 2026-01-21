function categorizeNumber (input) {
    for (let i = 0; input.length; i++) {
        if (typeof input[i] !== 'number') {
            throw new Error ('Input tidak valid')
        }
    }
}

console.log(categorizeNumber(15)); 
console.log(categorizeNumber(12)); 
console.log(categorizeNumber(17));
console.log(categorizeNumber(0)); 
console.log(categorizeNumber(-5));

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message);
}