// Strings and Functions
// Write a program that asks the user for a word. It then displays the following:
//  Number of vowels in the word (a, e, i, o, u, and y)
//  Whether your word is a palindrome or not
// o A palindrome is a word that is spelled the same way both forward and
// backwards (e.g. radar, level, madam)
// Examples:
// Input: Madam
// Output: Madam contains 2 vowels and is a palindrome
// Input: JavaScript
// Output: JavaScript contains 3 vowels and is not a palindrome
// Notes / Requirements:
// a. Create two functions per the following.
// There are many solutions to this exercise. I want to make sure you know how to work
// with "black box" functions. Given an input, the function returns an output. The user is
// not concerned with the details of how the output is calculated or the function displaying
// output in a specific format. The user gets the returned value and uses it as needed.
// i. First function - Compute number of vowels. Use the following:
// Input: Word (given above)
// Return: Number of vowels
// ii. Second function - Determine if the word is a palindrome. Use the following:
// Input: Word (given above)
// Return (a Boolean): True/False or 0/1
// b. Program is case insensitive

function vowelsNb(word) {
  word=word.toLowerCase();
  let arrayWord = Array.from(word);
  let vowelsNb = 0;
  let vowelsArray=["a","e","i","o","u","y"];
  for (const letter of arrayWord) {
    if (vowelsArray.includes(letter)) {
      vowelsNb++;
    }
  }
  return vowelsNb;
}

function palindromeTest(word){
  word=word.toLowerCase();
  let palindromeWord="";
  for (let index = 0; index < word.length; index++) {
    palindromeWord+=word[word.length-1-index];
  }
  if (palindromeWord===word) {
    return true;
  }
  else{
    return false;
  }
}

function exercice7(word){
  if (palindromeTest(word)){
    console.log(`"${word}" contains ${vowelsNb(word)} vowels and is a palindrome`)
  }
  else {
    console.log(`"${word}" contains ${vowelsNb(word)} vowels and is not a palindrome`)
  }
}

exercice7(prompt("Type a word"));
