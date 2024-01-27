let myWeight = 80;
let myHeight = 75;
let bMI = myWeight/(myHeight)**2;
console.log("Your BMI is : " + bMI.toFixed(4));

if(bMI < 18.5){
    console.log("You are underweight");
}
else if(bMI >= 18.5 && bMI <= 24.9){
    console.log("You are normal");
}
else if(bMI >= 25 && bMI <= 29.9){
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}