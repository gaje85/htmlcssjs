/*
* What is OOP?
* - OOP is Object oriented programming
* - where an object is meant to be a representation of real life entity
* - it has both the data (or properties) and the actions (or methods) for the real life entity coded in the programming language
*
* First we need to consider what an object template will look like
*
* Class Employee
* - Name - (firstName, lastName)
* - Age
* - Details - "Hi, My name is [firstName lastName]. I am [Age] years old
*
* ^^ Above is just general representation of a class - it is not JS code or syntax - pls dont confuse yourself
*
* Object: employee1
* - Name - (James, Bond)
* - Age - 25
* - Details - Hi, My name is James Bond. I am 25 years old.
*
* ^^ Above is how an instance of that employee class ie. an object will look like. Again, this is not code or syntax. Just for our learning
*
* So with above we can say that the class Employee is a blueprint and the Object employee1 is an instance of it or a creation based on the blueprint
**/

/*
* Lets write a JS method which when given some values provide an Employee Object as response.
*
* - This works fine, nothing wrong with this if we want to get different objects
* - But if you see here we explicitly construct a new empty object and return it each time with the props/methods set
**/

function createEmployeeObj(name, age) {
  const emp = {};
  emp.name = name;
  emp.age = age;
  emp.getDetails = function () {
    return `Hi, My name is ${obj.name}. I am ${obj.age} years old`;
  }
  return emp;
}

const jbond = createEmployeeObj("James", 25);
console.log(jbond.name);
console.log(jbond.getDetails()) ;

/*
* JS provides another option called constructor functions
* - Allows us to build objects from a template with the new operator
* - we use the this operator here - basically saying that when the object is created, we know that the objects `this` will have the values
* we passed via the constructor function
* - You can create as many such objects as you want - their properties and methods will be properly encapsulated with any problem
*
**/

function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    return `Hi, My name is ${this.name}. I am ${this.age} years old`;
  }
}

const james = new Employee("James", 25);
console.log(james.getDetails());

const bond = new Employee("Bond", 25);
console.log(bond.getDetails());

/*
* For your own explorations - take a look at Object.create() option to create an object
**/

/*
* With ES6 and onwards we have the class keyword itself available for defining classes and instantiating objects out of them
* - They are basically syntactic sugar over the constructor function approach
* - End result is just the same - go with what is comfortable for you - but beware of browser support
**/

class MyEmployee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Hi, My name is ${this.name}. I am ${this.age} years old`;
  }
}

const emp1 = new MyEmployee("Tom", 25);
console.log(emp1.name);
console.log(emp1.getDetails())

