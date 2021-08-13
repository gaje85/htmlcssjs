/*
* What is an object?
* - An object is a general terminology in programming languages
* - meant to represent a mix of related data and functionality
* - Within object the data is called property of an object
* - The functionality is present in functions or methods in the object
*
**/

/*
* The most common and simplest way of defining an object is via using {}.
* As simple as that.
* - typically the properties are string names either camelCased, or snake_cased.
* - There are multiple name/value pairs, name and value seperated by a colon (:)
* - Each name/value pair seperated by a comma (,)
* -
**/
let employee = {};
console.log(employee);

employee = {
  firstName: "James",
  lastName: "Bond",
  age: 25,
  getDetails: function () {
    console.log(`Hello, my name is ${this.firstName + this.lastName}. I am ${this.age}`);
  }
};

console.log(employee);

/*
* Now how do you access these properties and methods inside the object?
* - You make use of the dot operator (.)
* - There is another option wherein you use square brackets and mention the property name
**/

console.log(employee.firstName);
console.log(employee['lastName']);
employee.getDetails();
employee['getDetails']();

/*
* When to use which option?
* - Dot notation is simple and straight-forward - works for most use cases
* - However, you need to dynamically figure out which key you want at run time and use it - in such cases [] option will only work
* - Also, if you want to use property names which contain special characters
*
* To illustrate this better, let us create a different employee Object
**/

employee = {
  "first name": "James",
  "last name": "Bond"
};

/*
* Try accessing the property via . operator and it'll be obvious why that's not possible anymore
* - For these kinds of corner cases where we may hit upon syntax issues, its
**/
console.log(employee["first name"]);

/*
* In the below examples, you would have seen the usage of `this`
* - this is a reference to the object itself. It allows us to access other properties and members of the object from within the function
* - within the getDetails method we wanted to print the name and age of the employee under which getDetails is got.
**/

employee = {
  firstName: "James",
  lastName: "Bond",
  age: 25,
  getDetails: function () {
    console.log(`Hello, my name is ${this.firstName + this.lastName}. I am ${this.age}`);
  }
};
