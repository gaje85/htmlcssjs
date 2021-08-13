/*
* JS has a number of operators - we will take a look at some math and conditional operators as they are useful for us
*
**/

function mathOps() {
  /* Addition or sum */
  console.log(1 + 1);
  /* Subtraction or difference */
  console.log(1 - 1);
  /* Multiplication or product */
  console.log(2 * 3);
  /* Division */
  console.log( 4 / 2);
  /* Remainder */
  console.log( 5 % 2);
  /* Exponential */
  console.log( 2 ** 6);
  /*
   * Operator precedence
   * - Multiple & divide first
   * - Add & subtract first
   * - Brackets will override the previous mentioned precedence
   * - Left to Right
   *
   **/
  console.log(50 + 10 / 8 + 2);

  /*
  * Increment operators - post/pre
  **/
  let x = 10;
  /* Current value is returned and the variable is incremented by 1 */
  console.log(x++);

  let y = 15;
  /* Value is incremented and the incremented updated value is returned */
  console.log(++y);

  let a = 10;
  /* Current value is returned and the variable is decremented by 1 */
  console.log(a--);

  let b = 15;
  /* Value is decremented by 1 and the updated value is returned */
  console.log(--b);

  /* Assignment operators */
  let c = 5;

  /* Add the value on the RHS with current value and assign to LHS */
  c += 5;
  /* Subtract the value on the RHS with current value and assign to LHS */
  c -= 5;
  /* Multiply the value on the RHS with current value and assign to LHS */
  c *= 5;
  /* Divide the value on the RHS with current value and assign to LHS */
  c /= 5;

  /* These are useful when we want to write code succinctly */

  /* Negation operator - does the boolean negation of the value*/

  let trueVal = true;
  let falseVal = !trueVal;
}

mathOps();


function comparisonOps() {
  /* Strict equality or triple equals ===*/
  console.log(1 === '1');
  console.log('1' === '1');
  /* Equality or double equals == */
  console.log(1 == '1');
  console.log('1' == '1');
  /* Strict not equality */
  console.log(1 !== '1');
  console.log('1' !== '1');
  /* Not equals */
  console.log(1 != '1');
  console.log('1' != '1');

  /* In not strict operator cases, one of the operands is coerced into the other type & comparison is done */

  /* Greater than, greater than or equal to, less than, less than or equal to */
  console.log(1 > 2);
  console.log(1 >= 2);
  console.log(1 < 2);
  console.log(1 <= 2);
}

comparisonOps();




