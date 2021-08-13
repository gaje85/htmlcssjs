/*
* Functions are basic building blocks with which most applications or programs are built
* They allow us to re-use a certain logic any number of times where-ever needed, by declaring the function and then invoking
* it as needed.
*
* A typical function would have 0 or more input parameters, some logic that makes use of the input parameters or other data
* and then does something with the end result being possibly returned
*
**/

/*
* Function definition or declaration or statement
* - consists of the function keyword
* - name of the function
* - list of params passed to the function, within parenthesis ()
* - the logic written in JS statements, enclosed within {...}
*
**/

function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

/*
* Function expressions
* - There is another way of declaring/defining functions called as function expressions
* - Then function maybe anonymous or have a name
*
**/

let difference = function (numberOne, numberTwo) {
  if(numberOne === 100) throw new Error("Asdasdasd");
  return numberOne - numberTwo;
};


difference = function diff(numberOne, numberTwo) {
  if(numberOne === 100) throw new Error("Asdasdasd");
  return numberOne - numberTwo;
};

/*
*  Calling a function or invoking a function
* - a function is invoked by using the function name along with the parameters if any between parenthesis ()
* - the arguments to a function can any JS type including objects, arrays, primitives and other functions as well
**/

sum(1, 2);
difference(10, 1);

/*
* Variables defined within a function have function scope - meaning they are accessible only within the function itself.
*
**/

function testFn() {
  let x = 10;
  console.log(x);
}

testFn();
/* X will lead to reference error here */
console.log(x);

/*
* Basically whatever is defined/declared within the function cannot be accessed from the outside.
* At the same time, the function can access all the variables/functions in its parent scope. Meaning in this case,
* within testFn, we can access all other variables/functions declared within this file.
*
* A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
**/
const someGlobalVal = 100;
function printValues(numberOne, numberTwo) {
  const someLocalVal = 200;

  function sum() {
    const anotherLocalVal = 1.5;
    /*
    * within sum, we can access the immediately local vars, the local vars in the parent fn printValues,
    * the local values in printValues parentFn (which is this entire file)
    **/
    return numberOne + numberTwo + anotherLocalVal + someLocalVal + someGlobalVal;
  }

  let total = sum();

  console.log("The total is + " + total);
}

printValues(1, 2);

/*
* Above is also an example of a nested function, wherein one function is defined within another function.
* The inner function in the above example forms what is called as a closure in JS
* - This closure is what lets the inner function access the variables/functions of the outer function, whereas the outer function
* cannot use the args/variables in the inner function
*
* Lets take another look at nested functions below
* - Here the inner function is defined but not invoked within the outer fn
* - However, the inner fns reference is returned
* - We then invoke the inner fn - which has access to it own variable, as well as the variable of its parent, even though the
* outer fn has completed running
*
**/

function outer(outerVar) {
  function inner(innerVar) {
    return outerVar + innerVar;
  }
  return inner;
}

let innerFnRef = outer(10);
console.log(innerFnRef(5));

/*
* When declaring inner functions, if there are any variables that have the same name as the outer fns variables,
* then the inner fn effectively can only access the variable with that name from within itself and not the outer one
* - in below case when x is finally printed from within inside(), it prints its local value rather than the parents value of x
**/

function outside() {
  let x = 10;
  function inside() {
    let x = "James";
    console.log(x)
  }
  return inside;
}

let val = outside();
console.log(val());

/*
* Function parameters
* - When defining a function we can mention the parameters it takes as input
* - However, when calling/invoking the function, we can pass less or more number of parameters to the function
* - when we pass less number of params, the params which dont have values passed would be undefined
* - when we pass more number of params, to access the remaining params we can make use of the arguments[] array available within
* every function
*
**/

function sumsum(num1, num2) {
  return num1 + num2;
}

console.log(sumsum(1, 2));
console.log(sumsum(1, 2, 3));
console.log(sumsum(1));

function sumsumsum() {
  return arguments[0] + arguments[1];
}

console.log(sumsumsum(1, 2));

/*
* Default values
* - When a param is not passed to the function, its value is undefined
* - with es6, we can assign a different default value for each param
**/

function diff(num1 = 0, num2 = 0) {
  return num1 - num2;
}

console.log(diff(10, 5));
console.log(diff(10));
console.log(diff());

/*
* Arrow functions
* - It is another way or syntax of defining functions in JS
* - They dont have their own `this` - meaning it takes the parents scope there - that is a major difference with regular functions
*
**/


let doSumFn = function (val1, val2) {
  return val1 + val2;
};

doSumFn(1, 2);

let doSumArrow = (val1, val2) => {
  return val1 + val2;
};

doSumArrow(1, 2);

doSumArrow = (val1, val2) => val1 + val2;

doSumArrow(2, 2);
