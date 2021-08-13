/*
 * Now lets take a closer look at the method which gave us these magical promises
 * - In the method below, you will see that we use something call fetch
 * - This method take the request url and some options object
 * - It looks to be returning a promise itself - how do we know this? Because we can see the .then chain here as well
 * - Moreover, the documentation on the fetch api states that the method will return a promise.
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

/*
 * What is the Fetch API?
 * - fetch is a modern api that allows to fetch or get resources across the network
 * - we can provide a url and a http verb and a payload if needed and make a request happen across the internet or any network
 * - it is more modern than XMLHttpRequest (which is what is typically used for making an AJAX request)
 * - we dont need an additional lib like jquery to make the request - reduces dependencies
 * - the api is simpler and easier to use
 * - it works with the promise api - meaning we can write cleaner and more modern code
 * - It takes a url and an options object as input
 * - the url can be the endpoint we want to access via fetch
 * - the options object has many parameters - but lets focus on method and body for now :)
 **/

function basicFetch() {

  /*
   * The fetch method will return a promise immediately.
   * - the promise itself is a way for us to chain the logic to be had once the fetch request is successfull or hits an error
   * */
  const promise = fetch("https://reqres.in/api/users/2", {
    method: 'GET'
  });

  /*
   * When the promise is successful or fullfilled, the method passed to the then method will be called with a response object
   * - response object has lots of params, methods - we care about status and json
   **/
  return promise.then(function (response) {

    console.log("HTTP Status - " + response.status);

    if (response.status > 299) {
      throw new Error("We got a bad response status code");
    }

    /* Now when we know its 2xx response, we try to get the response json with the .json() method
     * - response.json() method again returns another promise
     * - we simply return the promise and handle it in the subsequent then chain
     **/

    return response.json();
  });

}

/*
* The basicFetch() method immediately returns a promise
* The actual response is made availabe in the .then chain when the server responds with the data
**/

const promise = basicFetch();
// It should be a promise in pending state
console.log(promise);

//Now we chain the promise we got with a .then method

promise.then(function (response) {
  console.log("Response - " + JSON.stringify(response));
}).catch(error => console.log("Got an error - ", error));


function makeAPOSTCall() {
  const user = {
    "name": "morpheus",
    "job": "leader"
  };

  return fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(fetchResp => {
    if(fetchResp.status > 299) {
      throw new Error("Unable to create user");
    }

    return fetchResp.json();
  });
}

makeAPOSTCall().then(response => {
  console.log("Create user response - ", response);
}).catch(error => console.log("Got an error - ", error));
