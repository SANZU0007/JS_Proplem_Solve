function printDivisors(num) {
    let limit = Math.floor(num / 2);
    for (let i = 1; i <= limit; i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
    console.log(num); // Since num is always a divisor of itself
   
  }
  
  let num = 20;
  printDivisors(num);
  