//function
// A block of code that can be resuse multiple times
// // parameter based function and without parameter
// function sum(){
//     let a = 10;
//     let b = 20;
//     console.log(a+b)
//     // return a+b;
// }
// // sum();  //if you use console.log or direclty prints inside function
// // console.log(sum())
// // console.log(sum())
// // console.log(sum())
// sum()
// sum()

// Parameter based function
// function mul(x,y){
// return x*y
// }
// console.log(mul(2,3))
// console.log(mul(12,12))

// function multiply(){
//     //local variable 
//     let a =10
//     a*=2
//     console.log("local variable",a)
// }
// multiply()
// console.log(a)


//Q1. check whether the given number is odd or EVEN using function and conditional statement
// Arrow Function modern function syntax
const evenOdd = (a)=>{
if(a%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}
}
evenOdd(12)