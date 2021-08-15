/*
* Arrays are very common data structures in any programming language and even more so in JS.
* - They are list like objects in JS - meaning every array is an object - typeof [] is object
* - They are 0 indexed.
* - Array sizes can change on the fly during run time based on the values stored in it
**/

/*
* Creating a new array
**/

let x = [];
const fruits = ['apples', 'oranges'];

/*
* Accessing values from the array
**/

console.log(fruits[0]);
console.log(fruits[100]);

/*
* Finding the length of the array
*
**/

console.log(fruits.length);
console.log([].length);

/*
* Changing particular values in the array
*
**/
fruits[2] = 'grapes';
console.log(fruits);
fruits[10] = 'papaya';
console.log(fruits);
console.log(fruits.length);

/*
* Arrays dont have to have the same type of values in them, JS allows us to mix the values and their types in an array
**/

const mixedBag = [1, 2, 3, 'apple', 'tomato', true, false, [1, 2, 3]];
console.log(mixedBag);
console.log(mixedBag.length);

/*
* Quirks related to an array
* - non-essential but good to know
* - We can assign values in arrays index by using a numerical value between []
* - Given the fact that an array is an object, we can set keys which are non numerical as well
* - However, critical thing to note is this new value that we set on the array is not iterable as such. W
* - We may access the value and update it by means of the new string based key, but it cannot be iterated upon
**/

fruits['tenthFruit'] = 'Mango';
console.log(fruits);

/*
* Various methods available on an array
*
**/

/*
* String.split
* Splits a string on the basis of the given input character and returns a new array on the basis of that
* we should have studied this with strings, but then it got delayed a bit till arrays were introduced :-)
**/
const fruitsStr = "apple,orange,grapes,pineapple";
var fruitList = fruitsStr.split(',');
console.log(fruitList);
console.log(fruitList.length);

/*
* Array.join
* join method will join the the array on the basis of the character/string given and returns a string
**/
console.log(fruitList.join('-'));

/*
* Array.push, Array.pop
* - adds an element to the end of the array
* - removes an element from the end of the array
**/

fruitList.push('mangoes');
console.log(fruitList);
fruitList.pop();
fruitList.pop();
console.log(fruitList);

/*
* Array.unshift, Array.shift
* - adds an element to the start of the array
* - removes an element from the start of the array
**/

fruitList.unshift('mangoes');
fruitList.unshift('grapes');
console.log(fruitList);
fruitList.shift();

/*
* Array.indexOf, Array.includes
* - tells the index of the matching element
* - tells whether an element is present in the array or not
**/

fruitList.indexOf('apple');
fruitList.includes('apple');

/*
* Array.sort
* - sorts the elements in the array - defaults to ascending, by converting elements to strings and then comparing the strings
* - you can pass a function to the sort function to modify the sort behavior
**/

let unsortedList = [4, 5, 1, 2, 10, 24];
unsortedList.sort();

unsortedList = ['zebra', 'man', 'apple', 'ball'];
unsortedList.sort();

unsortedList = [4, 5, 1, 2, 10, 24];

/*
* Sort in ascending
* - compareFunction(a, b) returns value > than 0, sort b before a.
* - compareFunction(a, b) returns value ≤ 0, leave a and b in the same order.
**/
unsortedList.sort(function (firstEl, secondEl) {
  if(firstEl <=  secondEl) {
    return -1;
  } else if(firstEl > secondEl) {
    return 1;
  }
});

/*
* Array.forEach
* - iterate over each value in the array
* - pass a function which is called over each element in the array
**/

let someList = ['lion', 'tiger', 'cat', 'dog'];
someList.forEach(function (item) {
  console.log(item);
});

/*
* Array.find
* - Used to identify or find an element in the array basis some condition
* - we pass a fn which tests if the element matches what we need
*   - if we return true or truthy from the fn, the element is matched
*   - if we return false or falsy from the fn, the element is ignored and next element is processed
**/

someList = ['lion', 'tiger', 'cat', 'dog'];

let elFound = someList.find(function (el) {
  return el === 'tiger';
});

console.log(elFound);

someList.find(function (el) {
  return el.length >= 5;
});

console.log(elFound);


/*
* Array.filter
* - pass a fn to the filter fn which returns a truthy/falsy value basis which the element in the array is filtered or not
* - the filtered list is then returned
**/

someList = ['lion', 'tiger', 'cat', 'dog'];
someList.filter(function (el) {
  return el.length >= 4;
});
someList.filter(function (el) {
  return el.length <= 3;
});


/*
* Array.map
* - used to iterate over every element in the array and apply certain logic on the element basis the fn passed to the map fn
* - the fn returns a new value which are all collected and a new array is returned
* - for eg, lets say i want to go from an array of strings, to an array of length of strings
* - ['lion', 'tiger', 'cat', 'dog'] --> [4, 5, 3, 3]
**/

someList = ['lion', 'tiger', 'cat', 'dog'];
const newList = someList.map(function (el) {
  return el.length;
});
console.log(someList);
console.log(newList);

/*
* Destructuring an array - ES6
*
**/

const someArr = ["lion", "tiger"];
/*
 * Same as
 * const animal1 = someArr[0];
 * const animal2 = someArr[1];
 **/
const [animal1, animal2] = someArr;
console.log(animal1);
console.log(animal2);

/*
* Spread syntax or Spreading an array
* - allows us to expand or spread the contents of array (or an iterable) into another array
* - very useful when we have to copy the values of an array into another new array along with some extra array values
**/

const arr1 = [10, 9, 8, 7, 6, 5];
const arr2 = [...arr1, "abc", "def"];
console.log(arr2);
