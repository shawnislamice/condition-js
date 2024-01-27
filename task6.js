let age = 12;
let fare;
fare=50;
if(age <= 10){
    console.log("No fare for you!")
    fare = 0;
}
else if(age > 10 && age < 25){
    console.log("You got 50% discount on your fare! ");
    fare = Math.floor(fare/2);
}
else if(age >= 60){
    console.log("You got 15% discount");
    fare = Math.floor(fare-(fare * (15/100)));
}else{
    console.log("Pay the regular fare");
}
console.log("Fare: "+ fare);