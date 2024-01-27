let score = 80;
let friendScore = 65;
if(score >= 80){
    if(friendScore > 80){
        console.log("Go for lunch");
    }
    else if(friendScore < 80 && friendScore >= 60){
        console.log("Good luck next time");
    }
    else if(friendScore < 60 && friendScore >= 40){
        console.log("Unseen message");
    }else if(friendScore < 40){
        console.log("I am blocking you now");
    }
}
else if(score < 80){
    console.log("Going home for sleep! I am sad also");
}