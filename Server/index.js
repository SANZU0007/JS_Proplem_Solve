
// Callback Hell



let result = setTimeout(()=>{
    console.log("first")
    setTimeout(()=>{
        console.log("second")
        setTimeout(()=>{
            console.log("third")
        },250)
    },250)

},250)

function PromiseChain(Duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, Duration);
  });
}

PromiseChain(250)
  .then(() => {
    console.log("first");
    return PromiseChain(250);
  })
  .then(() => {
    console.log("second");
    return PromiseChain(250);
  })
  .then(() => {
    console.log("third");
  });

const posts = () => {
  return new Promise((resolve, reject) => {
    let posts = ["post", "post2", "post3"];
    setTimeout(() => {
      resolve(posts);
    }, 250);
  });
};
const Comments = () => {
  return new Promise((resolve, reject) => {
    let Comment = ["cmt1", "cmt2", "cmt3"];
    setTimeout(() => {
      resolve(Comment);
    }, 250);
  });
};

Promise.all([posts(), Comments()]).then((results) => {
  const [post, Comments] = results;

  console.log(`post section ${post}`);
  console.log(`post section ${Comments}`);
});


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error) =>console.log(error))















