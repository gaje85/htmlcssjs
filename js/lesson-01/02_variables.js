/*
* A variable is basically a container to store a value.
* This value may or may not change during execution.
**/

// Declaring a variable - to do so we use the let or var keyword
let name;
var age;

// Note: In JS, all lines of code end with a semi-colon. Some ppl prefer not to use it saying its optional
// but when there are multiple lines of code, a semi-colon makes a huge difference.

// You can then assign values to the variables with the `=` operator
name = "James Bond";
age = 29;

// You can also declare & assign values at the same time in oneline
let employeeName = "John Doe";
var employeeAge = 35;

/*
* Naming conventions
* - Stick to using 0-9 a-z A-Z and underscore (_) characters for the names
* - dont start with underscore or numbers
* - you can use keywords for variable names
* - lowerCamelCase the names - myAge, yourNameAndAge and so on
* - Make it easy to understand for everyone. Vars will be used everywhere and everyone - make sure the next person can read your code
**/

/*
* let vs var
* var is the original keyword to declare variables in JS - has been part of the language spec since the beginning
* let is recently added as part of ES6 or ECMAScript 2015 spec - let fixes some of the issues with var
* - let has better scoping functionality than var
* - variables declared via let are not hoisted whereas var variable are hoisted
*
* we will take a look at the above 2 points next, but before that a brief primer about scopes
*
* */

/*
* There are 2 scopes in JS
* - Global Scope
* - Function Scope
* - Block Scope
*
* Declaring a variable anywhere in JS file outside of a fn automatically makes it part of the global scope. There is
* only 1 global scope per JS doc/file.
*
* Variables declared in a function have function scope. Before ES6, only global and function scope was present in JS
*
* Block scope is when a variable is declared within a block {}.
*
* Basically depending on the scope of the variable, it can either accessed at a particular line of code or not.
**/

var fruit = "Apple"; // var in global scope

console.log(fruit); // will print Apple, has access to the var fruit

function logFruit() {
  console.log(fruit); //Has access to the var fruit since its in the global scope
}

logFruit(); // will print Apple when called

//// Function scope

function someFn() {
  var text = "Hello World";
  let number = 123;

  /*accessible here, function scope*/
  console.log(text);
  /*accessible here, function scope*/
  console.log(number);
  /*declared globally and hence accessible here too*/
  console.log(fruit);
}

someFn();

/*not accessible here, as the variable text has function scope*/
console.log(text);

// Block scope

function anotherFn() {
  /* accessible in the entire fn including any blocks declared in it */
  let text = "Hello";

  {
    let moreText = "World";
    var number = 123;
    /* All the vars will print as they are all accessible */
    console.log(text);
    console.log(moreText);
    console.log(number);
  }
  /* has fn scope even though declared in a block as this is a var */
  console.log(number);
  /* has block scope, so not accessible outside that block */
  console.log(moreText);
}

anotherFn();

/*
* Hoisting
* - In JS, variables can be used before they are declared. How this happens is a JS will move all declarations to the top
* of the current scope. Only the declarations are moved to the top, not the assignments.
*
* */

function hoistOne() {
  console.log(cbd); // we will get an error which says cbd is not defined
  console.log(abc); // we simply get undefined, because the declaration of var abc is moved to the top.
  var abc;

  console.log(def); // def is hoisted as well, but only the declaration of def, which is why we dont get any error but the value printed is undefined
  var def = "hello";
}

hoistOne();

function hoistTwo() {
  /*Reference error - we wont get undefined like with the case of let
  * let is hoisted but not initialized at all (not even to undefined)
  *
  * While you might think the variable abc is not at all declared, its not the case.
  * Reference error is not the same as not defined.
  *
  * In simple terms, hoisting does not work for let as it does for var, in that, the net result is the same as un-hoisted variables
  * */
  console.log(abc);
  let abc;

  console.log(def);
  let def = "asdasd";
}

hoistTwo();


/*
* For these reasons of hoisting, its always good practice to declare/init variables before using them, preferably
* at the top of the function
*
* */


/*
*
* Now back to variables in JS. Once a var or let has been created and initialized, they can be updated again
* */

let x = 10;
x = "Hello";
x = true;

console.log(x);

/*
* You can also declare constants in JS. Thats where the const keyword comes in. This was intro'd as part of ES6.
* A const has same scoping and hoisting characteristics as a let. However, a const can only be initialized once at declaration
* and cant be changed again.
*
**/

const pi = 3.14;
console.log(pi);

pi = 2; // wont work.

