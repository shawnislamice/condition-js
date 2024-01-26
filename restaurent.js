const age=17;
if(age<=12){
    console.log("You can eat for free");
}
else if(age >= 60){
    const discount=price*(50/100);
    const payAmount=price-discount;
    console.log("You have to pay: "+payAmount);
}
else{
    console.log("No discount for you");
}