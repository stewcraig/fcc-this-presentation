// GENERAL - 'this' in JavaScript is determined based on
// how a function is called

// RULE 1: Functions called using exampleFunction()
// 'this' will be the global object

// RULE 2: Functions called using exampleObject.exampleFunction()
// 'this' will be exampleObject

// RULE 3: Functions called using call(), apply() or using bind()
// 'this' is be the object passed to above functions

// RULE 4: Functions called with 'new' keyword
// 'this' will be the new object

// IF MULTIPLE RULES APPLY - LATER RULES WILL TAKE PRECEDENCE

// BONUS RULE ???
