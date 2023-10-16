function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end of the word
  let start = 0;
  let end = word.length - 1;

  // Continue comparing characters while the start pointer is less than the end pointer
  while (start < end) {
    // If the characters at the start and end positions are not the same, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }

    // Move the pointers towards each other
    start++;
    end--;
  }

  // If the loop completes without finding any non-matching characters, it's a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

/*
  Add written explanation of your solution here
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
