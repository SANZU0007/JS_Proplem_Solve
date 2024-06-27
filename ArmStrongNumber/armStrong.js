function Armstrong(num) {
  let arr = num.toString();

  let length = arr.length;

  let sum = 0;
  for (let num of arr) {
    sum += Math.pow(parseInt(num), length);
  }

  return num == sum;
}

let num = 153;

if (Armstrong(num) == true) {
  console.log("given number ArmStrong");
} else {
  console.log("given number is Not ArmStrong");
}
