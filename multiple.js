const salary=25000;
const height=72;
const isBCS=true;
const hasCar=true;
if(salary>20000 && height<75){
    console.log("Perfect Candidate");
}
else{
    console.log("I may look for other");
}
if(salary>20000 || height<75){
    console.log("Perfect Candidate");
}
else{
    console.log("I may look for other");
}
// Complex condition
if((salary>20000 && height<75) || hasCar==true){
    console.log("Perfect Candidate");
}
else{
    console.log("I may look for other");
}
if((salary>20000 || height<75) && hasCar==true){
    console.log("Perfect Candidate");
}
else{
    console.log("I may look for other");
}