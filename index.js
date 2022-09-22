function isPalindrome(word) {
  let specChar = /[\W_]/g
  let lowerWord = word.toLowerCase().replace(specChar, '')
  let reverseWord = lowerWord.split('').reverse().join('')
  return reverseWord === lowerWord
}

/* 
  Add your pseudocode here
  
  remove special chars

  strng revs is same as string

  return true
  else
  false

*/

/*
  
  /[\W_]/g;
  looked up how to search of away to remove special chars
  
  [ and ] are the start and end of a character set.
  \W means "non-word", as opposed to \w which will match a word.
  _ is the "_" character.
  / mark the beginning and end of a regular expression.
  g means it's a global search. 

  I then set the word to be lower case and replace special char to remove them
  Next I reversed the words after spliting it and then i rejoined them
  last i check if the reviesed word is equal to the lower case word.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
