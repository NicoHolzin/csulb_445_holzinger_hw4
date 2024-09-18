// Calculator
// Create a function per the following requirements:
// Input (three parameters)
// Number1, Number2, Mathematical Operation (+, -, *, /)
// Return
// The result of the mathematical operation in the following format:
// Number1 operation Number2 = result.
// Note:
// Ask the user for the following
//  Number1
//  Number2
//  Mathematical Operation (+, -, *, /)
// Assume valid input
// You can use three prompts or a single prompt (e.g. comma delimited string) or a
// variation. Make sure it’s clear to the user what they need to enter.
// Call your function with these values.
// Display the string returned to the console.
// Examples:
// Input (can use multiple prompts): 1, 2, +
// Return (note the format): 1 + 2 = 3
// Input: 12, 3, /
// Return: 12 / 3 = 4

function Calculator(input) {
  let int1 = Number.parseInt(input[0]);
  let int2 = Number.parseInt(input[2]);
  let operation = input[1];

  if (Number.isInteger(int1)) {
    if (Number.isInteger(int2)) {
      switch (operation) {
        case "+":
          console.log(`${int1} + ${int2} = ${int1 + int2}`);
          break;
        case "-":
          console.log(`${int1} - ${int2} = ${int1 - int2}`);
          break;
        case "*":
          console.log(`${int1} * ${int2} = ${int1 * int2}`);
          break;
        case "%":
          if (int2 !== 0) {
            console.log(`${int1} % ${int2} = ${int1 % int2}`);
          } else {
            console.log("Division by 0 forbidden");
          }
          break;
        case "/":
          if (int2 !== 0) {
            console.log(`${int1} / ${int2} = ${int1 / int2}`);
          } else {
            console.log("Division by 0 forbidden");
          }
          break;
        default:
          console.log("Operator has not been recognised");
          break;
      }
    } else {
      console.log("One of your numbers is not an integer less than 10");
    }
  } else {
    console.log("One of your numbers is not an integer less than 10");
  }
}

Calculator(
  prompt("Type an operation with 2 integers less than 10 (e.g., 3*4)\nOperations accepted are: + - * / %")
);