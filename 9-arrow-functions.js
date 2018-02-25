console.clear();

// ARROW FUNCTIONS

var person = {
  name: "John",
  age: 26,
  doSomething: function example() {
    var greet = () => {
      console.log("Hello " + this.name);
    };
    greet();
  }
};

person.doSomething();
