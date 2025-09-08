"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let math1=2+3*(2-4)*6;//writing the equations to make it more readable for myself
let math2=2+3*2-4*6;
printOut("2+3*2-4*6="+math2+", "+"2+3*(2-4)*6="+math1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let mm=1;//defining different units
let cm=10*mm;
let meter=100*cm;
let inch=25.4;
let converted=(25*meter+34*cm)/inch;
printOut("25m og 34cm konvertert til inches er: "+converted.toFixed(2)+" inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sek=1;//Defining different time units 
let min=1*60;
let hour=1*60*60;
let day=1*60*60*24;
let convTime=(3*day+12*hour+14*min+45*sek)/60;//Summing up all time in minutes
printOut("Total tid i minutter: "+convTime);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let qTime=6322.52*60;//converting to seconds to make it easier to work with the variables i created earlier
let qTimeDay=Math.floor(qTime/day);
let qTimeHour=Math.floor((qTime%day)/hour);
let qTimeMin=Math.floor((qTime%hour)/min);
let qTimeSek=Math.floor(qTime%min);
printOut("6322.52min konvertert til dager, timer, minutter og sekunder: " + qTimeDay + " dager, " + qTimeHour + " timer, " + qTimeMin + " min, " + qTimeSek + " sek");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let USD1=76/8.6;
let UTN=Math.round(USD1*54);
let USD="54 USD";
printOut(USD + " = " + UTN + " NOK og " + UTN + " NOK"+ " = "+ USD);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);