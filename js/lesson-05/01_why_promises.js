/*
* Promises are a way to avoid callbacks in JS
* - For example, when we assign an event listener for an event, we are assigning a callback
* - Imagine having nested callbacks, like for example, when we do an api call to a server
* - what if we have to make another api call when we have the response of the first call
* - imagine doing this n levels deep
* - your life will become callback hell!
*
**/

/*
* Note: Run this code in a browser and not from a node interpreter
**/
function registerXHRListeners(x, successFn, errorFn) {
  successFn && x.addEventListener("load", successFn);
  errorFn && x.addEventListener("error", errorFn);
}

function onLoadForGetAllUsers() {
  console.log("Response status - " + this.status);
  console.log("Response - " + this.response);

  const anotherXhr = new XMLHttpRequest();
  anotherXhr.open("GET", GET_USER_BY_ID_URL);
  registerXHRListeners(anotherXhr, onLoadForGetUserByID, errorHandler)
  anotherXhr.send();
}

function onLoadForGetUserByID() {
  console.log("Response status for get by id - " + this.status);
  console.log("Response  for get by id - " + this.response);
}

function errorHandler() {
  console.log("Response status - " + this.status);
  console.log("Response - " + this.response);
}


const xhr = new XMLHttpRequest();
const GET_USERS_URL = "https://reqres.in/api/users?page=1";
const GET_USER_BY_ID_URL = "https://reqres.in/api/users/2";


xhr.open("GET", GET_USERS_URL);
registerXHRListeners(xhr, onLoadForGetAllUsers, errorHandler)
xhr.send();



/*
* Now imagine having to make an another request from the response of the first request
* and so on and so on. Its going to be really difficult to unravel this and make sense of the code after a point
*
* To over come this, JS has the promise API.
* - Promise API allows to chain or manage code logic that has to be run in an async manner
* - Basically we can write a piece of code which will give us a promise
* - Once that promise is successful, the promise will automatically call the .then method and so on
*
* This maybe abstract now but dont worry we will play around with promises when do the fetch api call
*
**/



