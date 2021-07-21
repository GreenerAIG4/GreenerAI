function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var month = (90-age)*12
        var week = (90-age)*52
        var day = (90-age)*365
        console.log("You have " + day + " days, " + week + " weeks, and " + month + " months left." )
    
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(23)

/***************************************************************/

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var bottles = Math.floor(money/1.5);
    console.log("You can buy " + bottles + " bottles of Milk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    }
    
    getMilk(5)

/***************************************************************/

function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
  
    console.log("You can buy " + calBottles(money, costPerBottle) + " bottles of Milk");
  
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calChange(money, costPerBottle)
  }
  
function calBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}
  
console.log("Hello maam, here is your $" + getMilk(10, 1.5) + " change.");
  
/***************************************************************/
