"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// For loops that counts up to 10 and down to 0. That stores and prints the values in a string
let txtPrintValue= "";
let txtPrintValue2= "";

for (let i=1,j=10;i<=10, j>=1;i++,j--){
    txtPrintValue+=i.toString()+" ";
    txtPrintValue2+=j.toString()+" ";
}

printOut(txtPrintValue+"<br>"+txtPrintValue2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// To variables that generates a random number between 1 and 60. A while loop that compares the two variables until they are the same. The While loop printed every guess until the correct number is guessed.
let txtPrintValue3= "";
let guessNumberAns= Math.floor(Math.random()*60)+1;
let guessNumberMachine= Math.floor(Math.random()*60)+1;

while(guessNumberMachine!==guessNumberAns){
    guessNumberMachine= Math.floor(Math.random()*60)+1;
    txtPrintValue3+=guessNumberMachine.toString()+" ";
}

printOut("Svaret er: "+guessNumberAns+ "<br> Maskinen gjetter: " +txtPrintValue3);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Similar to part 2.But whit larger range of numbers. The while loop has a counter that counts how many guesses the machine needs to find the correct number. And it measures the time it takes to find the corrects number.
const timeStart= Date.now();
let txtPrintValue4= "";
let guessCount=0;
let guessNumberAns2= Math.floor(Math.random()*1000000)+1;
let guessNumberMachine2= Math.floor(Math.random()*1000000)+1;

while(guessNumberMachine2!==guessNumberAns2){
    guessNumberMachine2= Math.floor(Math.random()*1000000)+1;
    guessCount++;
    txtPrintValue4=guessCount.toString();
}

const timeEnd= Date.now();
const timeUsed= (timeEnd-timeStart);

printOut("Svaret er: "+guessNumberAns2+"<br> Maskinen: "+txtPrintValue4+" ganger for å gjette tallet"+"<br> Maskinen bruker "+ timeUsed+ "ms på å finne svaret.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrintValue5= "";

for (let i=1; i<200; i++){
    let j= i-1;
    let isPrime= true;
    
    while(j>1 && isPrime){
        let rest= i%j;
        isPrime= rest !=0;
        j--;
    }
    if(isPrime){
        txtPrintValue5+= " "+i;
    }
}

printOut(txtPrintValue5);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pRow=7;
const pColum=9;
let txtPrintValue6="";

for (let i=1;i<=pRow;i++){
    for (let j=1;j<=pColum;j++){
        txtPrintValue6+= " K"+j.toString()+"R"+i.toString();
    }
    txtPrintValue6+="<br>";
}

printOut(txtPrintValue6);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrintValue8="";
let gradeR=Math.floor(Math.random()*126+1);
let gRCount=0;

while(gRCount!==5){
    gradeR=Math.floor(Math.random()*126+1);
    txtPrintValue8+=" "+gradeR.toString();
    gRCount++
}

printOut(txtPrintValue8);
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
