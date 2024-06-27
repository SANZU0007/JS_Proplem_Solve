function findAnagram(str1, str2) {
  let result = (str) => str.split("").sort().join("");

  let input = result(str1);
  let input4 = result(str2);

  if (input == input4) {
    return true;
  } else {
    return false;
  }
}

let input1 = "result";
let input2 = "resutl3";

if (findAnagram(input1, input2) == true) {
  console.log("it is angram");
} else {
  console.log("it is not Anagram");
}
