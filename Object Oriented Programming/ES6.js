class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} lagi makan`);
    }
}

const person1 = new Person('Aaron', 12);
const person2 = new Person('Betty', 15);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();

