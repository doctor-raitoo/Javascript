function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is acting`);
}

const person1 = new Person('Budi', 20);
const person2 = new Person('Alan', 22);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();
