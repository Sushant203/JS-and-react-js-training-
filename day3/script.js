// Day3:  Conditional statement in Javascript

// If else  statement
// if(a>b){
//     console.log(a+" is Greater")
// }
// else{
//     console.log(b+ " is greater")
// }

// else if

let a = 20;
let b = 30 
let c = 40
if(a>b && a>c){
    console.log(a+" c is greater")
}
else if(b>c){
    console.log(b +" c is greater")
}
else{
    console.log(c+" c is greater")
}
// Q: Declare four variables w,x,y,z and find largest/ greatest among them using if else if condition

//q2: using if else if else statement , display "your BMI [BMI VALUE] is perfect" , "your BMI is below average" or "your BMI is above average".



// q3: The user has got marks in one subject let us assume the marks can be from (1 to 100) we need to find the Grade got by student based on his marks
// a. if he got 90 or above the grade is A+
// b. if he got  above 80 and below 90 the grade is A
// c. if he got  above 60 and below 80 the grade is B
// d. else he got C
// And finally if marks is less than 40 he will be failed
// Nested IF
let marks = 67;
if(marks>40){
    if(marks>90){
        console.log("He got A+")
    }
    else if(marks>80 && marks<90){
        console.log("He got A")
    }
    else if(marks>60 && marks<80){
        console.log("He got B")
    }
    else{
        console.log("He got C")
    }
}
else{
    console.log("he failed the exam")
}

// Q4 : using the if else-if else statement , calculate the electricity bill  based on units consumed:
//comditions:
//up to 50 units = rs.3 per unit 
//51 -150 units = rs.5 per unit 
//Above 150 units = rs.8 per unit 