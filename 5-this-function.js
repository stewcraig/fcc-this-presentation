console.clear();

// 5. 'THIS' EXAMPLE 2

var person = {
  name: "John",
  age: 26,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

var callGreet = person.greet;

callGreet();
