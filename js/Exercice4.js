// Arrays
// Write a program using the following array, then calculates and displays the following:
//  Sum of all array values
//  Minimum value
//  Maximum value

// Note:
// Don't use array methods to compute the above.
// Iterate through the array to compute the requested values.
// The goal is for you to iterate through the array, we’ll discuss array methods in a later
// lecture.

const values = [3, 11, 7, 2, 9, 10];

function SumP(values) {
  let sum=0;
  for (const value of values) {
    sum+=value;
  }
  return sum;
}

function MinP(values) {
  let min=values[0];
  for (const value of values) {
    if (value<min) {
      min=value;
    }
  }
  return min;
}

function MaxP(values) {
  let max=values[0];
  for (const value of values) {
    if (value>max) {
      max=value;
    }
  }
  return max;
}

const arrayProprieties = {
  sum:SumP(values),
  min:MinP(values),
  max:MaxP(values),
  describe() {console.log(`
    The sum of the values is ${arrayProprieties.sum}\n
    The min value is ${arrayProprieties.min}\n
    The max value is ${arrayProprieties.max}`)}
}

arrayProprieties.describe();
