"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to get and print today's date in Norwegian format

function tid() {
  const event = new Date();
  const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateNorwegian = event.toLocaleDateString("no-NB", option);
  printOut(`Dagens dato: ${dateNorwegian}`);
  return event;
}

tid();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate days until a specific GTA 6 releases

function tid2() {
  const today = new Date();
  const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const dateNorwegian = today.toLocaleDateString("no-NB", option);
  printOut(`Dagens dato: ${dateNorwegian}`);
  return today;
}

function tidDiff(aTodayDate) {
  const eventDate = new Date(2026, 11, 19, 12, 56);
  const diffTime = eventDate - aTodayDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  printOut(`Det er ${diffDays} dager igjen til GTA 6 lanseres!`);
}

const todayDate = tid2();
tidDiff(todayDate);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate circle properties based on a random radius

function circle(aRadius) {
  const diameterValue = aRadius * 2;
  const circumferenceValue = 2 * Math.PI * aRadius;
  const areaValue = Math.PI * aRadius * aRadius;

  printOut(`For en sirkel med radius ${aRadius}:`);
  printOut(`Diameter: ${diameterValue}`);
  printOut(`Omkrets: ${circumferenceValue.toFixed(2)}`);
  printOut(`Areal: ${areaValue.toFixed(2)}`);
}

circle(Math.random() * 67 + 1);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function to calculate rectangle properties based on random length and width

function rectangle(aLength, aWidth) {
  const perimeterValue = 2 * (aLength + aWidth);
  const areaValue = aLength * aWidth;

  printOut(`For et rektangel med lengde ${aLength} og bredde ${aWidth}:`);
  printOut(`Omkrets: ${perimeterValue}`);
  printOut(`Areal: ${areaValue}`);
}

rectangle(Math.random() * 34 + 1, Math.random() * 54 + 1);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function that takes inn temp and temperature type and converts it to two other types and prints it out

function convertTemperature(aTemp, aTempTypes) {
  switch (aTempTypes) {
    case "kelvin":
      const tKelvin = aTemp;
      const kFahrenheit = ((tKelvin - 273.15) * 9) / 5 + 32;
      const kCelsius = tKelvin - 273.15;
      printOut(`Converting Kelvin: ${tKelvin}<br>Celsius: ${kCelsius}<br>Fahrenheit: ${kFahrenheit}<br>`);
      break;

    case "celsius":
      const tCelsius = aTemp;
      const cKelvin = tCelsius + 273.15;
      const cFahrenheit = tCelsius * 1.8 + 32;
      printOut(`Converting Celsius: ${tCelsius}<br>Fahrenheit: ${cFahrenheit}<br>Kelvin: ${cKelvin}<br>`);
      break;
    case "fahrenheit":
      const tFahrenheit = aTemp;
      const fCelsius = (tFahrenheit - 32) / 1.8;
      const fKelvin = (tFahrenheit + 459.67) * (5 / 9);
      printOut(`Converting Fahrenheit: ${tFahrenheit}<br>Celsius: ${fCelsius}<br>Kelvin: ${fKelvin}<br>`);
      break;
  }
}

convertTemperature(47, "kelvin");
convertTemperature(47, "celsius");
convertTemperature(47, "fahrenheit");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function vatCalc(aAmount, aType) {
  const amount = aAmount;
  let text = aType;
  let lCase = text.toLowerCase();

  let discountAmount = "";
  let wVatPrice = "";

  switch (lCase) {
    case "normal":
      discountAmount = amount * (25 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Normal price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    case "food":
      discountAmount = amount * (15 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Food price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    case "hotel" || "transport" || "cinema":
      discountAmount = amount * (10 / 100);
      wVatPrice = amount - discountAmount;
      printOut(`<br>Hotel, Transport, Cinema price with VAT: ${amount}<br>Price without VAT: ${wVatPrice}`);
      break;
    default:
      printOut("<br>Unknown VAT group!");
      break;
  }
}

vatCalc(100, "norMal");
vatCalc(150, "FOOD");
vatCalc(5498, "hotEL");
vatCalc(100, "gobLIN");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function SpdCalc(aSpeed = 0, aDistance = 0, aTime = 0) {
  const speedCalc = aDistance / aTime;
  const speed = aSpeed;
  // if (aSpeed === 0) {
  //}
}
SpdCalc(60);

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

//Takes inn a number and calculates the corresponding factorial of said number
function factorial(aNumber = 0) {
  let result = 1;
  for (let i = 1; i <= aNumber; i++) {
    result *= i;
  }
  printOut(`${aNumber}! = ${result}`);
}

factorial(5);

printOut(newLine);
