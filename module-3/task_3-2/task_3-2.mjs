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
// To variables that generates a random number between 1 and 60. A while loop that compares the two variables until they are the same. 
// The While loop printed every guess until the correct number is guessed.
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
// Similar to part 2.But whit larger range of numbers. 
// The while loop has a counter that counts how many guesses the machine needs to find the correct number. 
// And it measures the time it takes to find the corrects number.

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
//Checking which numbers between 1-200 is a prime number. Using for and while loops.
//For loop is counting up to 200. And the while loop is checking if the current number in the count is a prime.

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
//Using nested for loops to print out a table. Where both loops is counting to different numbers. 
//And said number is used to determent the number of columns and rows for the table.

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
// For loop that picks a random number between 1 and 126. Checks percent of the number. 
// Then runs it thru the different if and else loops. To determine the letter grade.

let txtPrintValue8="";
let gradeR=Math.floor(Math.random()*126+1);
let percent=(gradeR/126)*100;

for (let i=0; i<=5; i++){
    gradeR=Math.floor(Math.random()*126+1);
    percent= Math.floor((gradeR/126)*100);
    if (percent>=89){
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter A";
    }
    else if (percent<=88 && percent>=77){
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter B";
    }
    else if (percent<=76 && percent>=65){
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter C";
    }
    else if (percent<=64 && percent>=53){
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter D";
    }
    else if (percent<=52 && percent>=41){
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter E";
    }
    else {
        txtPrintValue8+=" Ut av 126 poeng så fikk eleven: "+gradeR.toString()+" , som tilsvarer: "+percent.toString()+ "% , og karakter F";
    }
    txtPrintValue8+="<br>";
}

printOut(txtPrintValue8);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Using a Do while loop to throw 6 dice to find different outcome

let rollStraight=0;
let roll3Pairs=0;
let rollTower=0;
let rollYahtzee=0;
let diceAnswer1=false;
let diceAnswer2=false;
let diceAnswer3=false;
let diceAnswer4=false;

do{
    let dice1=Math.floor(Math.random()*6+1);
    let dice2=Math.floor(Math.random()*6+1);
    let dice3=Math.floor(Math.random()*6+1);
    let dice4=Math.floor(Math.random()*6+1);
    let dice5=Math.floor(Math.random()*6+1);
    let dice6=Math.floor(Math.random()*6+1);

    let allDice=[dice1,dice2,dice3,dice4,dice5,dice6];
    let counts = {};

    for (let i = 0; i < allDice.length; i++) {
        let num = allDice[i];
        counts[num] = (counts[num] || 0) + 1;
    }

    let diceValues = Object.values(counts).sort((a, b) => b - a);
    let uniqueDice = Object.keys(counts).map(Number).sort((a, b) => a - b);

    //Straight
    if (!diceAnswer1) {
        rollStraight++;
        let isStraight = uniqueDice.length === 6 && uniqueDice.every((v, i) => v === i + 1);
        if (isStraight){
            diceAnswer1 = true;
        } 
    }

    //3 pairs
    if (!diceAnswer2) {
        roll3Pairs++;
        let isThreePairs = diceValues.length === 3 && diceValues.every(v => v === 2);
        if (isThreePairs){
            diceAnswer2 = true;
        } 
    }

    //Tower
    if (!diceAnswer3) {
        rollTower++;
        let isTower = diceValues.includes(4) && diceValues.includes(2) && diceValues.length === 2;
        if (isTower){
            diceAnswer3 = true;
        }
    }

    //Yahtzee
    if (!diceAnswer4) {
        rollYahtzee++;
        if (diceValues.length === 1 && diceValues[0] === 6){
            diceAnswer4 = true;
        }
    }
}while(!(diceAnswer1&&diceAnswer2&&diceAnswer3&&diceAnswer4))

printOut("Måtte kaste terningene: "+rollStraight+' ganger får å få en "Straight". ');
printOut("Måtte kaste terningene: "+roll3Pairs+' ganger får å få "3 pairs". ');
printOut("Måtte kaste terningene: "+rollTower+' ganger får å få en "Tower". ');
printOut("Måtte kaste terningene: "+rollYahtzee+' ganger får å få en "Yahtzee". ');
printOut(newLine);