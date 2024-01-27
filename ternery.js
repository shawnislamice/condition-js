const age=20;
if(age >= 18){
    console.log("You can vote now");
}
else{
    console.log("Go for sleep");
}
// Ternary formatting
age >= 18 ? console.log("You can vote"):console.log("Go to sleep")

let price=500;
let isLeader=true;

isLeader===true ? 0:price+100;

if(isLeader === true){
    if(price > 1000){
        price = price/2;
        console.log(price);
    }
    else{
        price=0;
        console.log(price);
    }
}
else{
    price=price + 1000;
    console.log(price);
}

// Ternary
price = isLeader===true ? (price > 1000 ? price/2 : 0):price+1000 
console.log(price);

if(isLeader){
    console.log("Leading is coming");
}
else{
    console.log("DO nor enter")
}

if(!isLeader){
    console.log("The condition is false");
}
else{
    console.log("The condition is true");
}

let inputValue=null;
if (!inputValue){
    console.log("Input value is falsy");
}
let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);