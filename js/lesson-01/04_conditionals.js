/*
* Like in all programming languages - JS allows us to take decisions & execute some logic
* on the basis of some conditions.
* - if...else statement
* - if...elseif...else statement
* - switch statement
* - ternary operator
*
* A related concept that we should be comfortable with is truthy/falsy values
**/

/**
 * Typically for any conditional statements we will need a boolean value true/false to determine if the
 * condition is to be executed or not. However, in JS it need not necessarily be true or false, but also
 * any truthy or falsy values.
 * Truthy values - A JS value (string, number, Object) which in Boolean context is considered to be true
 * Falsy values - A JS value (string, number, Object) which in Boolean context is considered to be false
 * Examples of such values are below.
 **/

function truthyValues() {
  if (true) {console.log("Truthy Value");}
  if ({}) {console.log("Truthy Value");}
  if ([]) {console.log("Truthy Value");}
  if (42) {console.log("Truthy Value");}
  if ("0") {console.log("Truthy Value");}
  if ("false") {console.log("Truthy Value");}
}

truthyValues();

function falsyValues() {
  if (false) {console.log("Falsey Value");}
  if (null) {console.log("Falsey Value");}
  if (undefined) {console.log("Falsey Value");}
  if (0) {console.log("Falsey Value");}
  if (NaN) {console.log("Falsey Value");}
  if ("") {console.log("Falsey Value");}

}

falsyValues();


function learnIfElse() {
  const someValue = 2 === 2;

  /* The if block code executes if the condition is satisfied
  * otherwise the else block will run here.
  * */

  if(someValue) {
      console.log("If case");
  } else {
    console.log("else case")
  }

  /* In an if..elseif..else construct, each of the conditions are checked for from the top onwards,
   * when any of the conditions match that block is executed and the other blocks in the construct
   * are ignored. If none of the conditions match then the else block will execute automatically
   *
   **/

  if(someValue) {
    console.log("if case");
  } else if (3 === 3) {
    console.log("else if case");
  } else {
    console.log("else case");
  }


  /*
  * Logical AND &&
  * Logical OR ||
  * These are 2 operators that help us to chain conditions together.
  *
  * Logical Not !
  * This operator allows us to invert the logical value (as in the boolean value itself)
  *
  **/

  if(1 === 1 && 2 === 2) {
    console.log("Logical AND && operator");
  } else {
    console.log("Else case")
  }

  if(1 !== 2 || 1 !== 2) {
    console.log("Logical OR || operator");
  } else {
    console.log("Else case")
  }

  if(!(1 === 2)) {
    console.log("Logical NOT ! operator");
  } else {
    console.log("Else case")
  }


}

learnIfElse();




function learnSwitchCase() {
  /* A switch case is a conditional construct where in a expression is passed to the switch statement which evaluates it
  * and on the basis of the evaluation will match against the first match case supplied within it
  * */

  /*
  * Basic example - we have a basic expression supplied to the switch case
  * The value supplied to the case can be any JS value - if that value matches the supplied expression's value, then that
  * case is run.
  *
  * Typically every case has a break statement at the end. The break statement breaks the flow of execution from the case and sends
  * it to the next line after the switch case. The break statement is optional though.
  *
  * The default block will execute if none of the case statements match. This is optional as well.
  **/

  const expr = 'Papayas';
  switch (expr) {
    case 'Oranges':
      console.log('Oranges are cheap.');
      break;
    case 'Papayas':
      console.log('Papayas are not cheap');
      break;
    default:
      console.log('No fruit matched !');
  }

}

learnSwitchCase();

/*
* Ternary operator
*  (expression) ? (true case - code to run) : (false case - code to run)
* It basically a simplified if...else construct which can be used in some situations
**/

function learnTernary() {
  let someVal = true;
  const msg = someVal ? "Hello world" : "How are you";

  console.log(msg);
}

learnTernary();
