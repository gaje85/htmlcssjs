/*
* Looping constructs allow us to do a set of operations repeatedly for a fixed number of times.
* Typically a loop would have
* - a counter - which is a value telling us how many times the loop has run, typically initialized at the beginning
* - a condition -  an expression which typically evaluates to true/false
* - an iterator - which increments or changes the counter value such that eventually the condition is met and the loop no longer runs
*
**/

/*
* For Loop
*
* for (initializer; condition; iterator) {
*   // logic to be run
* }
*
**/

function learnForLoop() {

  for (let i = 0; i < 10; i++) {
    console.log("Loop counter - " + (i + 1));
  }

  for (let i = 1; i < 10; i++) {
    console.log("Loop counter - " + (i + 1));

    if(i === 5) {
      /*
      * break statements in loops allow us to exit the immediately encapsulated loop from that point
      * typically it is applied with some constraint within a conditional
      * once the loop is broken out of, it does not run the remaining iterations and the code after the loop runs
      **/
      break;
    }
  }
}

learnForLoop();

/*
* While Loop and Do...While Loop
**/

function learnWhileLoop() {
  let i = 0;
  /*
  * While loop is an entry check loop
  * We will need to declare the iterator outside of the loop
  * The loop variable must also have it value updated from within the loop,
  * otherwise the loop will end up running forever
  * */
  while(i < 10) {
    console.log("While loop - " + (i+1));
    ++i;
  }

  /*
   * do...while loop is an exit check loop
   * Irrespective of the condition, this loop will end up running 1 time at the very least because we check the condition
   * at the end of the 1st iteration
   * We will need to declare the iterator outside of the loop
   * The loop variable must also have it value updated from within the loop,
   * otherwise the loop will end up running forever
   * */

  let j = 0;
  do {
    console.log("While loop - " + (j+1));
    j++;
  } while (j < 10)
}

