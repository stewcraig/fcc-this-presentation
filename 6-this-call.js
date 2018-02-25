console.clear();

// 6. 'THIS' EXPLICIT BINDING

var person = {
  name: "John",
  age: 26,
  doSomething: function() {
    function greet(person) {
      console.log("Hello " + this.name);
    }
    greet.call(person);
  }
};

person.doSomething();

// Can also use
// greet.apply(person);

// var callGreet = greet.bind(person);
// callGreet();
