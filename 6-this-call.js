console.clear();

// 6. 'THIS' EXPLICIT BINDING

var person = {
  name: "John",
  age: 26,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

var callGreet = person.greet;

callGreet.call(person);

// Can also use
// callGreet.apply(person);

// var callGreet.bind(person);
// callGreet();
