function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  const mid = Math.floor(len/2);

  for ( let i = 0; i < mid; i++ ) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }

  return true;
}
isPalindrome("abba")
isPalindrome("robot")
/* 
  Add your pseudocode here
*/
//function isPalindrome(word){
// if(word==null || word.length==0){
//   //  I put this check here because of 
//   // the following i < Math.ceil(word.length/2) && i< word.length
//   return false;
// }
// const lastIndex=Math.ceil(word.length/2);
// for (let i = 0; i < lastIndex  && i< word.length; i++) {
//   if (word[i] != word[word.length-1-i]) {
//       return false;
//   }
// }
//
/*
  Add written explanation of your solution here
*/
//isPalindrome function will return if specified word is palindrome, 
//based on boolean value (true/false) 

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
