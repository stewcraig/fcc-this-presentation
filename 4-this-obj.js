console.clear();

// 4. 'THIS' EXAMPLE

var person = {
  name: "John",
  age: 26,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();
