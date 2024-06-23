let input = "malayalam";

function Palindrome(str) {

    let Reverse = ''
    
   for(let i=str.length-1; i>=0; i--) {
 
     Reverse += str[i]
   }
    // Check if the reversed string is equal to the original string
    if (str === Reverse) {
        return true;
    } else {
        return false;
    }





  
}


console.log(Palindrome(input));  // Output: true

input = "madurai";
console.log(Palindrome(input));  // Output: false
