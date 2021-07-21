if (track === "clear") {
    goStraight();
}   else {
    turnRight();
}

/***************************************************************/

prompt("what is your name?");
prompt("what is her/his name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + " %, You love each other like Knaye loves Kanye")
}   else {
    alert("Your love score is " + loveScore + " %")
}

/***************************************************************/
//if it is ===, it checks datatype. == doesn't care.
//amnd &&, or ||

prompt("what is your name?");
prompt("what is her/his name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70) {
    alert("Your love score is " + loveScore + " %, You love each other like Knaye loves Kanye")
}  

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + " %")
}  

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + " %, Please love more each other!")
}  

/***************************BMI Calculator************************************/

function bmiCalculator (weight, height) {
    bmi = weight/(height*height)
    return bmi
}

function interpretation(interpretation){
    if (interpretation < 18.5) {
        return ("Your BMI is " + interpretation + ", so you are underweight");
}
    if (interpretation >= 18.5 && interpretation < 24.9) {
        return ("Your BMI is " + interpretation + ", so you have a normal weight")
    }
    if (interpretation > 24.9) {
        return ("Your BMI is " + interpretation + ", so you are overweight")
    }
    
}

/*************************Leap Year**************************************/

function isLeap(year) { 
    if (year % 4 !== 0) {
        console.log("Not leap year.")
    }

    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) { 
        console.log("Not leap year.")
    }

    if (year % 4 === 0 && year % 100 !== 0) { 
        console.log("Leap year.")
    }

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) { 
        console.log("Leap year.")
    }
}

isLeap(2020)

/***************Leap Year (Angels's Version)*****************/
function isLeap(year) { 
    if (year % 4 === 0) { 
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year"
    }
}

