// In Python, when we ask a question to a user, we used input("What is your name?").
// However, in JavaScript, it's prompt("What is your name?");.

var myName = "Valerie";

// when I want to change the variable, I just simply need to do myName = "Angela" (without var)

var myName = "Angela";
var youName = prompt("What is your Name?");
alert("My name is " + myName + ", welcome to my course " + youName + "!")

//Character count
var tweet = prompt("Enter your tweet");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters. You have " + (280-tweetCount) + " characters left."); 



