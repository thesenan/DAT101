"use strict";
import { TPoint } from "lib2d";

// 🖼️ Access the paint canvas and drawing context, move this to your new JavaScript file.
const cvsPaint = document.getElementById("cvsPaint");
const ctxPaint = cvsPaint.getContext("2d");

let mousePos = new TPoint();

function updateMousePos(aEvent){
    const rect = cvsPaint.getBoundingClientRect();
}

function mouseDown(aEvent){
    const x = aEvent.x;
    const y = aEvent.y;
    console.log(`Mouse Down at: x=${x}, y=${y}`);
}

cvsPaint.addEventListener("mousedown", mouseDown);