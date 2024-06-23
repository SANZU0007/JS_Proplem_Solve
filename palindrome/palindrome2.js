function Palindrome(str) {
  // Convert the string to lowercase to ensure the check is case-insensitive
  str = str.toLowerCase();

  let End = str.length - 1;

  // Loop from the start of the string to the middle of the string
  for (let i = 0; i < str.length / 2; i++) {
    // Compare characters from the start and end of the string
    if (str[i] !== str[End - i]) {
      // If any characters do not match, return false
      return false;
    }
  }

  // If the loop completes without finding mismatched characters, return true
  return true;
}

// Example usage:
let input = "madurai";
console.log(Palindrome(input)); // Output: false

input = "madam";
console.log(Palindrome(input)); // Output: true
