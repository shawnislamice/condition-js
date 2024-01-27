let burgerPrice = 500;

burgerPrice > 500 ? (
    console.log("You got a free drink"),
    burgerPrice
):(
    console.log("You have to pay the drink cost"),
    burgerPrice+=30
)
console.log("Bill: " + burgerPrice);