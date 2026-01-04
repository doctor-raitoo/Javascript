const himpunanAngka = new Set([1, 3, 9, 12]);

// menambahkan atau menyimpan nilai di set
himpunanAngka.add(2);

himpunanAngka.delete(1);

// mengakses nilai set menggunakan looping for
for (const number of himpunanAngka) {
    console.log(number);
}

// mengakses nilai set menggunakan looping foreach
himpunanAngka.forEach((value) => console.log(value));
