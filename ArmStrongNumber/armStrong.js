function Armstrong(num) {
  console.log(num)
  let arr = num.toString();

  console.log(arr)

  let length = arr.length;
  console.log(length)

  let sum = 0;
  
  for (let num of arr) {
    sum += Math.pow(parseInt(num), length);
    console.log(sum)
  }

  return num == sum;
}

let num = 1535;

if (Armstrong(num) == true) {
  console.log("given number ArmStrong");
} else {
  console.log("given number is Not ArmStrong");
}
