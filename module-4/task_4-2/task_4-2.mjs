"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Writing an array and using a for loop to repeatatly add it to a string which is later printed out.
const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let txt1 = "";

for (let i = 0; i < NumberArray.length; i++) {
  const value = NumberArray[i];
  if (i === NumberArray.length - 1) {
    txt1 += value.toString() + ". ";
  } else {
    txt1 += value.toString() + ", ";
  }
}

printOut("Alt inn i array: " + txt1);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Continuing on last task. Adding custom text to separate the array elements
let txt2 = NumberArray.join(" - ");

printOut("Array skrevet ut med en tekst separator:<br>" + txt2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Taking a text sting and removing space character and pusing every word to an array. Then using a loop to find the index corresponding to the correct word.
const text = "Hello there, how are you?";
const textArray = text.split(" ");
let txt3 = "";

for (let i = 0; i < textArray.length; i++) {
  const word = textArray[i];
  txt3 += "Index: " + i.toString() + " er " + word + newLine;
}

printOut(txt3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girlsNameArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function elementRemove(aArray, aName) {
  let indexDelete = -1;
  for (let i = 0; i < aArray.length; i++) {
    const name = aArray[i];
    if (name === aName) {
      indexDelete = i;
      break;
    }
  }
  if (indexDelete >= 0) {
    printOut(aName + " is found, and deleted.");
  } else {
    printOut(aName + " is not found.");
  }
}

elementRemove(girlsNameArray, "Kari");
printOut(girlsNameArray);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boysNameArray = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allNames = [girlsNameArray, boysNameArray];

printOut("Merged array with all names:");
printOut(allNames);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class TBook {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  toString() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

const bookArray = [new TBook("The Hobbit", "J.R.R. Tolkien", "9780261102217"), new TBook("1984", "George Orwell", "9780451524935"), new TBook("The Catcher in the Rye", "J.D. Salinger", "9780316769174")];

for (let i = 0; i < bookArray.length; i++) {
  printOut(bookArray[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  Weekday1: { name: "Monday", value: 1 },
  Weekday2: { name: "Tuesday", value: 2 },
  Weekday3: { name: "Wednesday", value: 3 },
  Weekday4: { name: "Thursday", value: 4 },
  Weekday5: { name: "Friday", value: 5 },
  Weekday6: { name: "Saturday", value: 6 },
  Weekday7: { name: "Sunday", value: 7 },
  Workdays: { name: "Workdays", value: [1, 2, 3, 4, 5] },
  Weekend: { name: "Weekend", value: [6, 7] },
};

const weekKeys = Object.keys(EWeekDays);

for (let i = 0; i < weekKeys.length; i++) {
  const key = weekKeys[i];
  const element = EWeekDays[key];
  printOut(`${key}, Name: ${element.name}, Day(s): ${element.value}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNumbers = [];
for (let i = 0; i < 35; i++) {
  randomNumbers.push(1 + Math.floor(Math.random() * 20));
}

printOut("Unsorted:");
printOut(randomNumbers);

let asc = randomNumbers.slice().sort(function (a, b) {
  return a - b;
});

printOut("Sorted ascending:");
printOut(asc);

let desc = randomNumbers.slice().sort(function (a, b) {
  return b - a;
});

printOut("Sorted descending:");
printOut(desc);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let freq = {};

for (let i = 0; i < randomNumbers.length; i++) {
  let num = randomNumbers[i];
  if (freq[num] === undefined) {
    freq[num] = 0;
  }
  freq[num]++;
}

printOut("Numbers and their frequency:");
for (let key in freq) {
  printOut("Number " + key + ": occurs " + freq[key] + " times");
}

// Convert to array for sorting
let freqArray = Object.keys(freq).map(function (n) {
  return {
    number: Number(n),
    count: freq[n],
  };
});

// Sort by frequency desc, then number asc
freqArray.sort(function (a, b) {
  if (a.count === b.count) {
    return a.number - b.number;
  }
  return b.count - a.count;
});

printOut(newLine);
printOut("Sorted by frequency (most frequent first):");

for (let j = 0; j < freqArray.length; j++) {
  let entry = freqArray[j];
  printOut("Number " + entry.number + ": " + entry.count + " times");
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalRows = 5;
let totalColumns = 9;

let table2D = [];

for (let r = 0; r < totalRows; r++) {
  let columnList = [];

  for (let c = 0; c < totalColumns; c++) {
    let cellText = "Row: " + (r + 1) + ", Column: " + (c + 1);
    columnList.push(cellText);
  }

  table2D.push(columnList);
}

let output = "Generated 5x9 matrix:" + newLine + newLine;

for (let r = 0; r < table2D.length; r++) {
  for (let c = 0; c < table2D[r].length; c++) {
    output += table2D[r][c] + " || ";
  }
  output += newLine;
}

printOut(output);

printOut(newLine);
