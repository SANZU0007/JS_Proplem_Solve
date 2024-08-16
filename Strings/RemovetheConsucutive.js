function RemoveNxtString(str) {
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    if (result[result.length - 1] != str[i]) {
      result += str[i];
    }
  }
  return result;
}

let input = "ssaannjjaayy";

let result = RemoveNxtString(input);

console.log(`${input}:${result}`);
