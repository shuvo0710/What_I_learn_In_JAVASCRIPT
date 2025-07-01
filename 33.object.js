// // student details:

// // how to create an object ;

// let student1 = {
//   name: "nizam uddin shuvo",
//   age: 23,
//   cgpa: 3.4,
//   lang: ["bengali", "hindi", "english"],
// };

// let student2 = {
//   name: "umme habiba islam rupa",
//   age: 22,
//   cgpa: 3.5,
//   lang: ["bengali", "urdu", "english"],
// };

// let student3 = {
//   name: "minha rahman sahira",
//   age: 4,
//   cgpa: 4,
//   lang: ["bengali", "hindi", "portugese"],
// };
// // how to print an object ;

// console.log(student2.lang);

//adding a costructor.

function Student(name, age, cgpa, language) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.language = language;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.language);
  };
}
const student1 = new Student("anisul islam", 23, 3.2, [
  "bengali",
  "english",
  "hindi",
]);

const student2 = new Student("umme habiba islam rupa", 22, 3.5, [
  "bengali",
  "urdu",
  "english",
]);

const student3 = new Student("nizam uddin shuvo", 23, 3.8, [
  "bengali",
  "english",
  "hindi",
]);
console.log(student3.name);

// adding function in constructor
console.log(student2.display());
function Car(name, color, price, miles) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.miles = miles;

  this.displayCar = function () {
    console.log(this.name);
    console.log(this.color);
    console.log(this.price);
    console.log(this.miles);
  };
}

const car1 = new Car("BMW", "black", "$10000", 600);

console.log(car1.name);
