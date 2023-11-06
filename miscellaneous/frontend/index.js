//Constructor

// const Person = function (firstName, lastName, age) {
//   (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
//   console.log(this);
// };
// Person.prototype.clacAge = function () {
//   return this.age - 2023;
// };

// const nirav = new Person("Nirav", "Bhuva", 1998);
// console.log(nirav.clacAge());
// console.log(nirav.__proto__.__proto__.__proto__);

//

const Person = class {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }
  calcAge() {
    return 2023 - this.age;
  }
};

class Student extends Person {
  constructor(firstName, lastName, age, isAdult) {
    super(firstName, undefined, age), (this.isAdult = isAdult);
  }
}
const nirav = new Person("Nirav", "bhuva", 1998);
console.log(nirav);

const studenta = new Student("c", "yx", 1998, true);
console.log("studentA", studenta.calcAge());
