// Function – Convert Fahrenheit to Celsius
// Create a function per the following:
// Input: Fahrenheit temperature
// Return: Fahrenheit temperature converted to Celsius
// Notes:
// a. Fahrenheit to Celsius conversion formula is:
// C = (F – 32) * 5/9
// Example
// 212 Fahrenheit.
// Celsius = (212 – 32) * 5/9 = 100
// Below is the starter code (copy and paste the below and write the function)

// // Write code for a function
// // TODO: your code here
function fahrenheitToCelsius(tempF) {
  return (((tempF-32)*5/9).toFixed(2));
}
// // Test your function.
// // Note the following:
// // Input: Fahrenheit temperature
// // Return: Fahrenheit temperature converted to Celsius
// //
// // Various users may use the function and display the output in
// // different formats. Therefore, the function returns the result and
// // does not display it on the console.
// // Create input and output variables and test
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212} Celsius`);
// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32)} degrees Celsius`);
// Create a variable and test
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7)} degrees Celsius`);
// Your output should be as follows:
//  Water's boiling temperature is 212 Fahrenheit or 100 Celsius
//  32 degrees Fahrenheit = 0 degrees Celsius
//  Temperature of 98.7 Fahrenheit is 37.05555555555556 degrees Celsius
// Enhance the output for the last test to format the result with 2 decimals
// (Use Google to help):
//  Temperature of 98.7 Fahrenheit is 37.06 degrees Celsius
