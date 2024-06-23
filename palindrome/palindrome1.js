
let input = "mama"

function Palindrome(str){

    let first = 0
    let End = str.length-1

    while(first<End){
        if (str[first] !== str[End]){
            return false
        }else{
            first++
            End--
        }
    }




    return true
}


if(Palindrome(input) == true  ){
console.log("given strings is Palindrome")
}else{
    console.log("given strings is   not  A Palindrome")
}




