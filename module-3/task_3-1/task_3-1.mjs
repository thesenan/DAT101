"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7; //Variable that can be changed to test the different outputs of the if and else statements
if (wakeUpTime==7) {
  printOut("I can catch the bus to school.");
  }else if (wakeUpTime==8) {
    printOut("I can ride the train to school.");
    }else {
     printOut("I have to drive the car to school.");
          }
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numPN= 0; //Variable that is changed between negative, positive and zero to test the different outputs of the if and else statements
if (numPN<0) {
  printOut(numPN + " is a negative number.");
}else if (numPN>0) {
  printOut(numPN + " is a positive number.");
  }else {
  printOut(numPN + " is zero.");
    }
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let picture= Math.floor(Math.random()*8)+1; //random number generator between 1 and 8 to test the different outputs of the if and else statements
printOut("The picture is: " + picture + "MB.");
if (picture==5||picture==4) {
  printOut("<br>Thank you");
}else if (picture<4){
  printOut("<br>The image is to is to small.");
  }else {
  printOut("<br>Look at the next row");
    }
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Reusing the variable picture from part 6 to test the different outputs of the if and else statements
if (picture>5) {
  printOut("The image is to large.");
}else {
  printOut("Nothing to see here.");
    }
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Using array to store the months of the year and a random number generator to pick a month
const monthList= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth= monthList.length;
const monthName= monthList[Math.floor(Math.random()*noOfMonth)];
printOut("The month is: " + monthName);
if (monthName.indexOf("r")!==-1){
  printOut("You must take vitamin D");
}else {
  printOut("You don't need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Using switch to give the months the correct number of days and printing the result
switch (monthName) {
  case "January": printOut("January has 31 days.");
  break;
  case "February": printOut("February has 28 days."); 
  break;
  case "March": printOut("March has 31 days.");
  break;
  case "April": printOut("April has 30 days.");
  break;
  case "May": printOut("May has 31 days.");
  break;
  case "June": printOut("June has 30 days.");
  break;
  case "July": printOut("July has 31 days.");
  break;
  case "August": printOut("August has 31 days.");
  break;
  case "September": printOut("September has 30 days.");
  break;
  case "October": printOut("October has 31 days.");
  break;
  case "November": printOut("November has 30 days.");
  break;
  case "December": printOut("December has 31 days.");
  break;
  }
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Reusing the variable monthName from part 8 to check if the gallery is open or closed
printOut("The month is: " + monthName);
if (monthName == "March" || monthName == "April" || monthName == "May") {
  if (monthName == "March" || monthName == "May") {
    printOut("The gallery is currently closed for renovation.");
  } else {
    printOut("The gallery is temporarily moved to the building next door.");
  }
}else {
  printOut("Welcome to the gallery. Enjoy your visit!");
}
printOut(newLine);