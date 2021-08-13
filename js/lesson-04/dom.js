const headerElement = document.getElementById('header-el');
const headerByClass = document.getElementsByClassName('header-class');
console.log(headerElement);
console.log(headerByClass);

/*
 * .querySelector takes any CSS selector and selects the element and returns that element/node object
 * */
const linkElement = document.querySelector('a');
console.log(linkElement);

linkElement.textContent = "Facebooks home page";
linkElement.href = "https://www.fb.com";


const pElement = document.createElement('p');
pElement.textContent = "Hope you enjoy DOM APIs";

const divElement = document.querySelector('div');
divElement.appendChild(pElement);

const textElement = document.createTextNode(' Use MDN the premier source for web development knowledge.');
pElement.appendChild(textElement);

divElement.removeChild(pElement);

/*
* Home work - How to change values of attributes?
* How to change values of styles applied on node via vanilla JS
* */
