"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to get and print today's date in Norwegian format

function tid(){
    const event= new Date();
    const option= {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateNorwegian= event.toLocaleDateString("no-NB", option);
    printOut(`Dagens dato: ${dateNorwegian}`);
    return event;
}

tid();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate days until a specific GTA 6 releases

function tid2(){
    const today= new Date();
    const option= {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateNorwegian= today.toLocaleDateString("no-NB", option);
    printOut(`Dagens dato: ${dateNorwegian}`);
    return today;
}
 
function tidDiff(aTodayDate){
    const eventDate= new Date(2026, 11, 19, 12, 56);
    const diffTime= eventDate - aTodayDate;
    const diffDays= Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    printOut(`Det er ${diffDays} dager igjen til GTA 6 lanseres!`);
}

const todayDate= tid2();
tidDiff(todayDate);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate circle properties based on a random radius

function circle(aRadius){
    const diameterValue= aRadius * 2;
    const circumferenceValue= 2 * Math.PI * aRadius;
    const areaValue= Math.PI * aRadius * aRadius;
    
    printOut(`For en sirkel med radius ${aRadius}:`);
    printOut(`Diameter: ${diameterValue}`);
    printOut(`Omkrets: ${circumferenceValue.toFixed(2)}`);
    printOut(`Areal: ${areaValue.toFixed(2)}`);
}

circle(Math.random()*67 + 1);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate rectangle properties based on random length and width

function rectangle(aLength, aWidth){
    const perimeterValue= 2 * (aLength + aWidth);
    const areaValue= aLength * aWidth;

    printOut(`For et rektangel med lengde ${aLength} og bredde ${aWidth}:`);
    printOut(`Omkrets: ${perimeterValue}`);
    printOut(`Areal: ${areaValue}`);
}

rectangle(Math.random()*34 + 1, Math.random()*54 + 1);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const tempTypes = {
    kelvin: 1,
    celsius: 2,
    fahrenheit: 3
}

function convertTemperature(aTemp, aTempTypes){
    let kelvin=0;
    let celsius=0; 
    let fahrenheit=0;

    switch (aTempTypes){
        case tempTypes.kelvin:
            kelvin= aTemp;
            celsius= kelvin - 273.15;
            fahrenheit= (celsius * 9/5) + 32;
            tempTypeName = "Kelvin";
            break;
        case tempTypes.celsius:
            celsius= aTemp;
            kelvin= celsius + 273.15;
            fahrenheit= (celsius * 9/5) + 32;
            tempTypeName = "Celsius";
            break;
        case tempTypes.fahrenheit:
            fahrenheit= aTemp;
            celsius= (fahrenheit - 32) * 5/9;
            kelvin= celsius + 273.15;
            tempTypeName = "Fahrenheit";
            break;
        }   
    }

    convertTemperature(300, tempTypes.kelvin);
    convertTemperature(27, tempTypes.celsius);
    convertTemperature(80, tempTypes.fahrenheit);

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
