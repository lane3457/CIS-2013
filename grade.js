//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade



 var floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));

 var floatMidPts = parseFloat(prompt("please enter midterm pts (0-35):"));

 var floatFinPts = parseFloat(prompt("Please enter final pts (0-35):"));

 var floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

 var intGradeOption = prompt("Enter 1 for A-F scale enter 2 for a pass or fail course!");
//console.log(floatTotalPts);
if (intGradeOption == 1){
    if(floatTotalPts >= 90){
        alert("You got a A good job!");
}
    /*else{
        (floatTotalPts >= 80 && floatTotalPts<=71);
        alert("You got a B Good Work.");
    }*/
    if (floatTotalPts >= 80 ){
        alert("You got a B Good Work.");
}
    if (floatTotalPts >= 70 ){
        alert("You got a C you passed but we both know you can do better!");
    }
    if (floatTotalPts >= 60 ){
        alert("You got a D you can do better then this try coming to class more than once a week might be a good start");
    }
    if (floatTotalPts >= 50){
        alert("You failed the course i will see you again next semester");
    }
    if (floatTotalPts <=49){
        alert ("Did you come to class besides on the first day??");
    }
}
if (intGradeOption == 2) {
    if (floatTotalPts >= 80){
        alert("you passed the class Good job!!");
    }
    else{ 
        alert("You failded the class feel free to try again next semester!!");
    }
}