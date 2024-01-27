let myWeight = 80;
let myHeight = 1;
let bMI = myWeight/(myHeight)**2;
console.log("Your BMI is : " + bMI.toFixed(4));

bMI < 18.5 ? (
    console.log("You are underweight")
)
: bMI >= 18.5 && bMI <= 24.9 ? (
    console.log("You are normal")
)
: bMI >=25 && bMI <= 29.9?(
    console.log("You are overweight")
):(
    console.log("You are obese")
)