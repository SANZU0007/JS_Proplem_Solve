function printDivisors(num) {
    let limit = Math.floor(num / 2);
    for (let i = 1; i <= limit; i++) {
      if (num % i === 0) {
        if(i !==1){
          console.log(i)
        }
      }
    }

   
  }
  
  let num = 20;
  printDivisors(num);
  