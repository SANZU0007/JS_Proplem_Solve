let input = -1000;
function CountTheDigits (num){
  
    num = Math.abs(num);

    if(num == 0) return 1;

    for (; num > 0; num= Math.floor(num/10)  ){
        count++;
    }
  return count
}

console.log(CountTheDigits(input) + "number")