const colorChangerBtn = document.querySelector('button');

function randomNumber() {
  const min = 0;
  const max = 4;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * We get the button element and attach a function which listens for the onclick event
 * - onclick - is the event handler property on the button to which we assign a function
 * - this function will be run when the onclick event is fired for the button (when a user clicks on the button with the mouse/cursor)
 **/
colorChangerBtn.onclick = function () {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  const bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = colors[randomNumber()];
}

/*
* There could be other event handler properties
* - onfocus
* - onblur
* - onmouseover
* - onmouseout
*
* Try exploring these other events properties by attaching event listeners for the button for these events and see what happens
**/


/*
* Adding/Removing event handlers
* - We saw above how we could use the event handler property of elements to attach an event listener.
* - Above approach works fine for most cases, however it is an old approach
* - There is a more modern approach via the addEventListener and removeEventListener
**/

function buttonClickListener(event) {
  /*
  * An event object is passed automatically to the event handler
  * - makes life easy as it provides a lot of information
  * - event.target will reference the element from which the event is fired
  * - event.preventDefault - stops some default action of the element when the event is fired upon it
  **/
  console.log("Button has been clicked");
  console.log(event);
}

colorChangerBtn.addEventListener('click', buttonClickListener);

/*
* When to use old approach
* - old approach works fine for all usecases like older IE browsers and such
* - however it does not have a way to attach multiple listeners for the same
* element and same event property
*
* When to use new approach
* - when you know your code runs on modern browsers, then absolutely go with this
* - it allows us to attach multiple event handlers for an event on an element
*
**/
