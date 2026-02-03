"use strict";
import { EGameStatusType, spawnColorButton, gameOver, UpdateRound } from "./SimonSays.mjs";

let colorButton = null;
let sequence = [];
let round = 0;
let seqIndex = 0;

export function addRandomButton(aColorButtons){
    const index = Math.floor(Math.random() * aColorButtons.length);
    colorButton = aColorButtons[index];
    sequence.push(colorButton);
    seqIndex = 0;
    colorButton = sequence[0];
    setTimeout(setButtonDown, 1000); //This is the wait time before seq. Start
}   

export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){
        console.log("Yes");
        seqIndex++;
        if(seqIndex < sequence.length){
            //We have not reach the end of sequence.
            colorButton = sequence[seqIndex];
        }else{
            // We have reached the end of sequence
            round++;
            UpdateRound(round);
            spawnColorButton();
        }
    }else{
        console.log("Game Over!");
        gameOver();
    }
}

function setButtonDown(){
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 1000);
}

function setButtonUp(){
    colorButton.onMouseUp();
    seqIndex++;
    if(seqIndex < sequence.length){
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown, 500);
    }else{
        EGameStatusType.state = EGameStatusType.Gamer;
        seqIndex = 0;
        colorButton = sequence[0];
    }
}

