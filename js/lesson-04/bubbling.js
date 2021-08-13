const divEl = document.querySelector('.ex-one');
divEl.addEventListener('click', function (event) {
  console.log("I got a click event - ", event);
  console.log("Target was from - ", event.target);
})

/*
* How does this work?
* - we clicked the button, but the listener on the parent element fired
* - what happened is - when event fires or happens on the element
*   - it'll run the event listener on the element
*   - then it'll run the event listener on the parent
*   - then it'll run the event listener on the parent of parent and so on
* - However despite bubbling, the event.target attribute will always point to the source of the event
**/

const secondDivEl = document.querySelector('.ex-two');
secondDivEl.addEventListener('click', function (event) {
  console.log("I got a click event - ", event);
  console.log("Target was from - ", event.target);
});

/*
* event.stopPropagation will prevent the event from bubbling up to any parent event listeners
* */
const secondBtnEl = document.querySelector('.second-btn');
secondBtnEl.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log("I got a click event - ", event);
  console.log("Target was from - ", event.target);
});


