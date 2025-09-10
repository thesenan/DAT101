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
let USD1=76/8.6; //converting 1 USD to NOK and calculating 
let UTN=Math.round(USD1*54);
let USD="54 USD";
printOut(USD + " = " + UTN + " NOK og " + UTN + " NOK"+ " = "+ USD);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let setning="Det er mye mellom himmel og jord som vi ikke forstår.";//Finding different information about the sentence
let setMengd= setning.length;
let set19= setning.charAt(19); 
let setChar= setning.substring(35,43);
let setJord= setning.indexOf("jord");
printOut(setning+"<br>"+"Setningen har "+ setMengd+ " karakterer"+"<br>"+"Karakter nr 19 er: "+set19+ "<br>"+ "Karakterene fra 35 til 43 er: "+ setChar+"<br>"+'Ordet "jord" starter på plass: '+ setJord);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let femTree= (5>3);//Comparing different values
let sju7= (7>=7);
let aB= ("a">"b");
let oneA= ("1"<"a");
let numAbcd= ("2500"<"abcd");
let aThomas= ("arne"!="thomas");
let sammenlign= (2===5);
let sammenlign2= ("abcd">"bcd");
printOut("5>3 er: "+femTree+"<br>7>=7 er: "+sju7+'<br>"a">"b" er: '+aB+'<br>"1"<"a" er: '+oneA+'<br>"2500"<"abcd" er: '+numAbcd+'<br>"arne" er ikke det samme som "thomas" er: '+aThomas+'<br>(2===5) === true er: '+sammenlign+'<br>("abcd">"bcd") === '+sammenlign2+' er: true');
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numChange1= "254";//Different strings to be converted to numbers
let numChange2= "57.23";
let numChange3= "25";

printOut('"254" = '+numChange1+ '<br>"57.23" = '+numChange2+ '<br>"25 kroner" = '+numChange3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r= Math.random() * 360 + 1;//Generating a random number between 1 and 360
r= Math.floor(r);
printOut("Tilfeldig tall mellom 1 og 360: "+r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let sporDay= 131; //Calculating days and weeks from 131 days
let days=1;
let weeks=1*7;
let convWeeks= Math.floor(sporDay/weeks);
let convDays= Math.floor(sporDay%weeks);
printOut("131 dager er "+ convWeeks + " uker og "+ convDays + " dager");
printOut(newLine);