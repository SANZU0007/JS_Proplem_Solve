let input = "malayalam";

function Palindrome(str) {
    let Reverse = '';

    // Loop from the end of the string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        Reverse += str[i];
    }

    // Check if the reversed string is equal to the original string
    if (str === Reverse) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(Palindrome(input));  // Output: true

input = "madurai";
console.log(Palindrome(input));  // Output: false
