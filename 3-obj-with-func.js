console.clear();

// 3.1 OBJECT WITH FUNCTION PROPERTY

var person = {
  greet: function(name) {
    console.log("Hello " + name);
  }
};

person.greet("John");
