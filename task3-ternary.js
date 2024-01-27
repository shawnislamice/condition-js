let grade = 75
grade >= 90 && grade <= 100 ?(
    console.log("You got A")
)
: grade >= 80 && grade <= 89 ?(
    console.log("You got B")
)
: grade >= 70 && grade <= 79 ?(
    console.log("You got C")
)
: grade >= 60 && grade <= 69 ?(
    console.log("You got D")
)
: grade >= 0 && grade <= 59 ?(
    console.log("You got F")
)
:(
    console.log("Invalid grade")
)