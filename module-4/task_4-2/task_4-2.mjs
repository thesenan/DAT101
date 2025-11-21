"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Writing an array and using a for loop to repeatatly add it to a string which is later printed out.
const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let txt1="";

for (let i = 0; i<NumberArray.length; i++){
    const value= NumberArray[i];
    if (i===NumberArray.length - 1){
        txt1+= value.toString()+ ". ";
    }else{
        txt1+= value.toString()+ ", ";
        }
    }
    
printOut("Alt inn i array: "+txt1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Continuing on last task. Adding custom text to separate the array elements
let txt2 = NumberArray.join(" - ");

printOut("Array skrevet ut med en tekst separator:<br>"+txt2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Taking a text sting and removing space character and pusing every word to an array. Then using a loop to find the index corresponding to the correct word.
const text= "Hello there, how are you?";
const textArray= text.split(" ");
let txt3="";

for (let i=0; i < textArray.length; i++){
    const word= textArray[i];
    txt3+="Index: "+i.toString()+ " er "+ word+ newLine;
}

printOut(txt3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlsNameArray= ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth","Kristin"];

function elementRemove(aArray, aName){
    let indexDelete= -1;
    for(let i=0; i< aArray.length; i++){
        const name = aArray[i];
        if(name===aName){
            indexDelete=i;
            break;
        }
    }
    if (indexDelete >= 0){
        printOut(aName+ " is found, and deleted.");
    }
    else{
        printOut(aName + " is not found.");
    }
}

elementRemove(girlsNameArray, "Kari");
printOut(girlsNameArray);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
