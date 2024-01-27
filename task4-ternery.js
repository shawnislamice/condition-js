let score = 80;
let friendScore = 30;

score >= 80 ?(
    friendScore >= 80 ?(
        console.log("Go for lunch")
    ): friendScore < 80 && friendScore >= 60 ?(
        console.log("Good luck next time!")
        ):friendScore < 60 && friendScore >= 40 ?(
            console.log("Message for unseen")
        ): friendScore < 40 ?(
            console.log("I am blocking you")
        ):
        (console.log("Error"))
)
: score < 80 ?(
    console.log("I am going home for sleeping and I am also sad")
)
:(
    console.log("Invalid score for both")
);