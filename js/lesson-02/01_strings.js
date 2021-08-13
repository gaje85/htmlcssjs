/*
* Strings -  A data type used to hold a sequence of characters
* Strings are probably the most commonly used data type in any programming language
*
* In JS, we can define strings through either the string primitive or the String object
*
**/
// Typically we use the primitive form to define a string variable in JS, invoking the Object type is done rarely
// For all intents and purposes the primitive types would work more than fine
let str = "Hello World"; // string primitive
let someStr = new String("Hello World") // String object

/*
* Defining a string
* There are multiple ways as seen below, but the most common approach is via the primitive string assignment
* The object way of creating a string is rarely used, if ever at all.
*
**/

/*
* You can use either single quotes or double quotes but make sure they match.
* Mismatched quotes will not let the code run.
**/

const abc = 'Hello world';
const def = "Hello world to you too";

/*
* while this uses String, it actually returns a primitive string
**/
const ghi = String("Hello world");

/*
* This constructs a new String instance object and returns it
* Happens because of the new keyword
**/
const jkl = new String("Hello world as well");

/*
* Suppose our string contains a quote (' or "), then the string definition would not work as expected.
* In such cases, we would have to escape such characters.
* Use the backward slash to escape such characters.
**/

let health = 'I\'m healthy';
health = "I\"m healthy";

/*
* Another option is the mixed used of quotes characters like below. Either option is fine.
* */
health = "I'm healthy";

/*
* Concatenating strings
*
* The most common way of concatenating strings is via the + operator. When used with strings, + is overload and
* works to concatenate a string.
*
**/

let hello = "hello";
let world = "world";

let combinedStr = hello + " " +world;
combinedStr = "hello " + world;
combinedStr = hello + " world";

/*
* Basically you can concatenate in various ways as seen above with the help of +
* You can also use it to combine as many strings as you want in one shot
**/

combinedStr = "Hello" + "  " + "world! How are you doing ? " + "I hope everyone is fine";

/*
* Now what if you want to insert a dynamic value into a string as part of some variable?
* In the below example you can see how variables or values of other data types are auto converted to string and then
* concatenated
**/

const name = "James Bond";
const age = 29;
const greetings = "Hello " + name + "! You are " + age + " years old!"

/*
* With es6, there are other ways to concatenate dynamic values into a string.
* This is called template literals and makes use of the `` (backtick) characters instead of regular quotes
**/

let x = "Hello world!";
/*
* This can now be defined via template literals. There is no difference with this syntax for regular string creation.
**/
x = `Hello world!`;

/*
* However say we want to insert a dynamic value, this syntax makes it much easier and better.
* We make use of ${} as a placeholder in the string where we can place JS expressions who result is then concatenated
* with the remaining string
**/

const kidsAge = 15;
const ageStr = `I am ${kidsAge} years old!`;

/*
* Now that we know how to declare strings, lets look at some operations we can perform on strings
*
**/

/*
* we can find the length of a string with the help of the length property
* Note: This is a property and not a method. Also, given that primitives are dont have methods or properties,
* how does this property aspect work?
*
* What happens is when a property or a method is invoked on a string primitive, JS does an automatic type conversion from the
* primitive string to the Object String and then calls the property or the method
**/
x = "Hello how are you??"
console.log("length - " + x.length);

/*
* Accessing a particular character in a string
* Use the [] notation or .charAt() method
*
**/

console.log(x[0]);
console.log(x.charAt(0));

/*
* Finding the index of a character in a string
* - this method accepts a string as input and tells us the first occurring index for the input parameter
**/
x = "Hello how are you??";
console.log(x.indexOf("e"));
console.log(x.indexOf("l"));
console.log(x.indexOf("z"));
console.log(x.indexOf("how"));

/*
* You can also use the includes method to find if a string includes or contains another string
* - we can achieve similar results with indexOf by checking if the result is not -1 (as in the string is present in some index of the string)
* - added as part of es6
**/

x = "Hello how are you??";
console.log(x.includes("e"));
console.log(x.includes("how"));
console.log(x.includes("james"));

/*
* toLowerCase() and toUpperCase()
* returns string in all lowercase or all uppercase
**/

x = "HeLlO wOrLd";
console.log(x.toLowerCase());
console.log(x.toUpperCase());


/*
* Taking out a substring from an existing string.
* There are numerous methods in JS String object, we will use the slice method
* slice(startIndex, endIndex) - startIndex is compulsory, endIndex is optional
* returns a new string matching the parameters
**/

x = "Hello how are you??";
console.log(x.slice(0, 5));
console.log(x.slice(6));
console.log(x.slice(99));
