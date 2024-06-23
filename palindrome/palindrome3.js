
let input = 'mams'

function Palindrome (input){
    let Reverse = input.split('').reverse().join('')

    if (Reverse == input){
        return true
    }
    return false

}

if(Palindrome(input)==true){

    console.log("given strings is Palindrome")
}else{
    console.log("given strings is   not  A Palindrome")
}






