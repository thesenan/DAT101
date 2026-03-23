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
// Function that takes inn an amount and a VAT type and calculates the price without VAT and prints it out

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
// Function that takes inn three values, one of which is null, and calculates the missing value based on the formula: Speed = Distance / Time

function SpdCalc(aSpeed, aDistance, aTime) {
  // Count how many values are missing
  let missingCount = 0;
  if (aSpeed === null) missingCount++;
  if (aDistance === null) missingCount++;
  if (aTime === null) missingCount++;

  // Ensure exactly one value is missing
  if (missingCount !== 1) {
    printOut("<br>Error: Exactly one value must be missing!<br>");
    return NaN;
  }

  // Missing SPEED
  if (aSpeed === null) {
    if (!aTime || aTime === 0 || !aDistance) {
      printOut("<br>Error: Time or Distance cannot be zero or null when calculating speed!<br>");
      return NaN;
    }
    const calcSpeed = aDistance / aTime;
    printOut(`<br>Calculated Speed = ${calcSpeed.toFixed(2)} km/h<br>`);
    return calcSpeed;
  }

  // Missing TIME
  if (aTime === null) {
    if (!aSpeed || aSpeed === 0 || !aDistance) {
      printOut("<br>Error: Speed or Distance cannot be zero or null when calculating time!<br>");
      return NaN;
    }
    const calcTime = aDistance / aSpeed;
    printOut(`<br>Calculated Time = ${calcTime.toFixed(2)} hours<br>`);
    return calcTime;
  }

  // Missing DISTANCE
  if (aDistance === null) {
    if (!aSpeed || !aTime) {
      printOut("<br>Error: Speed or Time cannot be null when calculating distance!<br>");
      return NaN;
    }
    const calcDistance = aSpeed * aTime;
    printOut(`<br>Calculated Distance = ${calcDistance.toFixed(2)} km<br>`);
    return calcDistance;
  }
}

SpdCalc(null, 100, 20); // Calculates speed
SpdCalc(5, null, 10); // Calculates distance
SpdCalc(5, 100, null); // Calculates time
SpdCalc(null, null, 10); // Error: More than one value missing

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function that takes inn a string, a max size, a character to fill in with and a boolean to determine if the character should be added at the end or the beginning of the string. The function should then adjust the string to fit the max size by adding the character at the correct position until the string is long enough.

function StringAdjust(aText, aMaxSize, aChar, aInsertAtEnd) {
  if (aText.length >= aMaxSize) {
    printOut(`<br>Adjusted String: "${aText}"<br>`);
    return aText;
  }

  let newText = aText;

  while (newText.length < aMaxSize) {
    if (aInsertAtEnd === true) {
      newText = newText + aChar;
    } else {
      newText = aChar + newText;
    }
  }
  printOut(`<br>Adjusted String: "${newText}"<br>`);
  return newText;
}
StringAdjust("Hello", 10, "*", true);
StringAdjust("Hello", 10, "*", false);
StringAdjust("HelloWorld", 5, "*", true);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function that tests the formula: 1 + 2 + ... + n = n * (n + 1) / 2 for the first 200 lines and prints out if the test was successful or not

function MathTest(aLines) {
  let currentNumber = 1;

  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber;
      currentNumber++;
    }

    for (let i = 0; i < line; i++) {
      rightSum += currentNumber;
      currentNumber++;
    }

    if (leftSum !== rightSum) {
      console.log(`Test failed at line ${line}: Left = ${leftSum}, Right = ${rightSum}`);
      return;
    }
  }
  printOut("<br>Maths fun!<br>");
}

MathTest(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Function that takes inn a number and calculates the factorial of that number and prints it out

function factorial(aNumber = 0) {
  let result = 1;
  for (let i = 1; i <= aNumber; i++) {
    result *= i;
  }
  printOut(`${aNumber}! = ${result}`);
}

factorial(8);

printOut(newLine);
