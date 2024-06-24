let input = -1000;

function CountTheDigits(num) {
  // Convert the number to its absolute value
  num = Math.abs(num);

  // Special case for zero
  if (num === 0) {
    return 1;
  }

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(CountTheDigits(input));
