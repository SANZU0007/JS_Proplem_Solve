// async function Asyncfunc (){
//     return "new String"
// }

// Asyncfunc().then((val)=>{
//     console.log(val)
// })

async function getData() {
  let postComment = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchingPost");
    }, 2000);
  });

  let postlike = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchingLike");
    }, 5000);
  });

  // let result1 = await postComment;
  // console.log(result1)
  // let result2 = await postlike;
  // console.log(result2)

  let result = await Promise.all([postlike, postComment]);

  console.log(result[0]);
  console.log(result[1]);

  return result;
}

let data = getData();

data.then((val) => {
  console.log(val);
});
console.log("fetching the data");
