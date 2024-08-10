let a = 1;

let b = 2;

function newTask(a, b) {
  setInterval(() => {
 [a,b] = [b,a]
 console.log(a,b)
  }, 2000);
}

newTask(a,b)