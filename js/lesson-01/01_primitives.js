// This is an example of a comment in JS

/*
* This is also an example of a comment in JS. This is multi-line.
* The previous example is single line comment.
* Might as well be aware of this as we will have them all over code-snippets
*
**/

/*
* A primitive is a type that is present in JS language as such
* Various primitives are as below
* - string
* - number
* - boolean
* - undefined
* - null
*
* There are a few more primitives but lets not get into them for now. These should suffice to begin with.
* Note how they are all lowercase. They are not the same as String, Number, Boolean which are the object equivalent of them
* */

/*
* We will use a method called console.log() to print values to the console. It basically will accept a string or any type of
* input and print it to the console. Its usage is very ubiquitous.
*
* We will also make use of the typeof operator which is a unary operator (Accepts one parameter only) and returns the type
*
**/


console.log(typeof 'abc'); // string
// A variable without value set would be undefined
// boolean types have 2 values - true or false
console.log(typeof true); // boolean
console.log(typeof 123); // number
console.log(typeof undefined); // undefined
// object - all objects in JS are derived from null. However since its behavior is very primitive, its denoted to be
// a primitive
console.log(typeof null); // object




// So these are the basic JS primitives
// For the primitives string, boolean, number there are equivalent wrapper objects String, Boolean, Number



console.log(typeof new String('abc'))
console.log(typeof new Boolean(true))
console.log(typeof new Number(123))

// These wrapper objects have numerous methods on them which are useful for JS programming


