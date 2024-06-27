let input = "malayalams";

function isPalindrome(input) {
  let start = 0;
  let End = input.length - 1;

  while (start < End) {
    if (input[start] !== input[End]) {
      return false;
    } else {
      start++;
      End--;
    }
  }
  return true;
}

if (isPalindrome(input) == true) {
  console.log("given string Palindrome");
} else {
  console.log("given string not Palindrome");
}
