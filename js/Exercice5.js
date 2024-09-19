// Function – Array and Object
// Create a function per the following:
// Input: An array of numbers (assume valid input)
// Return: An object containing the following properties:
//  firstElement
//  lastElement
//  length
// Display the object returned to the console.
// Examples:
// Input: [4, 8, 12, 5, 20]
// Return:
// {
// firstElement: 4,
// lastElement: 20,
// length: 5
// }
// Input: ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}]
// Return:
// {
// firstElement: 'a',
// lastElement: { name: 'Alice', score: 98 },
// length: 7
// }

const values = ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}];

function valuesProprieties(values){
  const valuesProprieties = {
    firstElement: values[0],
    lastElement: values[values.length-1],
    length:values.length
  }
  return valuesProprieties;
}

console.log(valuesProprieties(values));