console.clear();

// 7. CONSTRUCTOR

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person("John", 26);
var sarah = new Person("Sarah", 37);

console.log(john.age);
console.log(sarah.age);
