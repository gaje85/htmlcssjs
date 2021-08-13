/*
 * The contents of this method are magical - they give you promises!
 * - For now dont worry about the content/logic in this method - we will understand it better when we learn fetch api next
 * - Just assume that this method returns an object - an object of type Promise
 **/
function givesYouPromises(requestUrl) {
  const options = {
    method: 'GET'
  };

  return fetch(requestUrl, options)
    .then(response => {
      if (response.status > 299) {
        throw new Error("Something went wrong with the request");
      }

      return response.json();
    });
}

const promise = givesYouPromises("https://reqres.in/api/users?page=1");

console.log(typeof promise);
console.log("Is of type promise? " + promise instanceof Promise);

/*
* Now what do we do with this promise?
* You can chain methods to handle the success and error response from that promise
* A promise will have the following methods on it
*  -  .then - the method which is called when the promise is a success
*  -  .catch - the method which is called when the promise encounters an error
*  -  .finally - the method which is always called at the end
*
**/


const successPromise = givesYouPromises("https://reqres.in/api/users?page=1");
/*
* To the .then method we pass a function
* - the number of arguments on the function depend on the promise object and what we do inside the promise
* - in this case, just know that we will get a response object which has the result of our api call
* - How do we control what the promise does - we will understand clearly when the
* -
**/
successPromise.then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
}).catch(error => {
  console.log("Something went wrong - ", JSON.stringify(error));
});

/*
* The url below will throw a 404 from the server end. We will use it to showcase the error situation
*
**/

const failedPromise = givesYouPromises("https://reqres.in/api/users/23");

failedPromise.then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
}).catch(error => {
  console.log("Something went wrong - ", JSON.stringify(error));
});

/*
* Now how we do an api call at the end of the 1st call
* Take a look at it below code snippet
*
**/

const firstPromise = givesYouPromises("https://reqres.in/api/users?page=1");

firstPromise.then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
  const secondPromise = givesYouPromises("https://reqres.in/api/users?page=2");
  /*
  * when we return another promise at the end of the method, then chain can continue further
  * we can add another .then method where the result of this promise is made available
  **/
  return secondPromise;
}).then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
}).catch(function (error) {
  console.log("Something went wrong - ", JSON.stringify(error));
});

/*
* What happens when there is an error when we chain multiple promises like before?
*
**/

const errorFirstPromise = givesYouPromises("https://reqres.in/api/users/23");
errorFirstPromise.then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
  const secondPromise = givesYouPromises("https://reqres.in/api/users?page=2");
  return secondPromise;
}).then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
}).catch(function (error) {
  console.log("Something went wrong - ", JSON.stringify(error));
});


const okFirstPromise = givesYouPromises("https://reqres.in/api/users?page=1");
okFirstPromise.then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
  const errorSecondPromise = givesYouPromises("https://reqres.in/api/users/23");
  return errorSecondPromise;
}).then(function (response) {
  console.log("We have a response result from the api - " + JSON.stringify(response));
}).catch(function (error) {
  console.log("Something went wrong - ", JSON.stringify(error));
});
