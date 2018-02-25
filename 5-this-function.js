console.clear();

// 5. 'THIS' EXAMPLE 2

var person = {
  name: "John",
  age: 26,
  doSomething: function() {
    function greet(person) {
      console.log("Hello " + this.name);
    }
    greet();
  }
};

person.doSomething();
