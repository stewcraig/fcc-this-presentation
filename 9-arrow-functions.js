console.clear();

// 9. ARROW FUNCTIONS

var person = {
  name: "John",
  age: 26,
  doSomething: function example() {
    function greet() {
      console.log("Hello " + this.name);
    }
    greet();
  }
};

person.doSomething();

// var person = {
//   name: "John",
//   age: 26,
//   doSomething: function example() {
//     var greet = () => {
//       console.log("Hello " + this.name);
//     };
//     greet();
//   }
// };

// person.doSomething();
