let result = (marks) => {
  return new Promise((resolve, reject) => {
    console.log("loading Your Marks");

    setTimeout(() => {
      let total = 0;
      let result = "pass";
      marks.forEach((mark) => {
        total += mark;
        if (mark <= 35) {
          result = "faill";
        }
      });

      resolve({total:total, result:result});
    }, 2000);
  });
};

result([50, 50,50]).then((value)=>{
    console.log(value)
    return grade(value)
}).then((value)=>{
    console.log(value)
})

const grade = (value)=>{
    return new Promise((resolve, reject)=>{
        let avg = value.total/3
        let Grade = 'C Grade'
        if(avg >= 90 && avg<=100){
            Grade = 'A Grade'
        } else if(avg >= 80 && avg<=89){
          Grade = 'B Grade'
        }else if(avg >= 70 && avg<=79){
          Grade = 'C Grade'
        }
       resolve({Grade:Grade,result:avg})
    })

}