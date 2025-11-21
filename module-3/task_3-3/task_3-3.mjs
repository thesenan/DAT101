"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function tid(){
    const event= new Date(Date.UTC(2025, 10, 17, 12, 56));
    printOut(event.toLocaleString("no-NB", {timeZone: "UTC"}));
}

tid();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tDDate={year:"",month:"",day:""}
function todayDate(){
    const event= new Date(Date.UTC(2025, 10, 17));
    let txt1 = event.toLocaleString("no-NB", {timeZone:"UTC"});
    return txt1;
}
function releaseDay(){
    const event= new Date(Date.UTC(2026, 5, 14));
    let txt1 = event.toLocaleString("no-NB", {timeZone:"UTC"});
    return txt1;
}
let txt2=todayDate();
let txt3=releaseDay();
let txt4=txt3-txt2;
printOut(txt2+newLine+txt3+newLine+txt4);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
