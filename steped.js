// Multi-level conditions

const price=4000;

if (price >= 5000){
    const discount=price*(10/100);
    console.log("Discount: "+discount);
    const payAmount=price-discount;
    console.log("Amount need to pay: "+payAmount);
}
else if(price >2500){
    const discount=price*(5/100);
    console.log("Discount: "+discount);
    const payAmount=price-discount;
    console.log("Amount need to pay: "+payAmount);
}
else{
    console.log("You have to pay without discount: "+price);
}