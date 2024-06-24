let String1 = "sanjuu";

let String2 = "sanuuj";

function ChLength(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count += 1;
    }
  }
  return count;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];

    let c1 = ChLength(str1, ch);
    let c2 = ChLength(str2, ch);

    if (c1 !== c2) {
      return false;
    }
  }
  return true;
}

if (isAnagram(String1, String2) == true) {
  console.log("given strings are anagram");
} else {
  console.log("given strings are not anagram");
}
