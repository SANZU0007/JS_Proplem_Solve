function AramStrongNumber(N) {
  console.log("Original number:", N);

  let count = 0;

  while (N > 0) {
    N = Math.floor(N / 10);
    count++;
  }
  console.log(count);
  return false;
}

const N = 153;

if (AramStrongNumber(N)) {
  console.log("This number is an Armstrong number:", N);
} else {
  console.log("This number is not an Armstrong number:", N);
}
