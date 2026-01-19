"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";

export class THero extends TSprite{
    #gravity
    #speed
    constructor(aSpvcs, aSPI){
        //const xPos = this.spriteBackground.height/this.spriteBackground.width;
        
        super(aSpvcs, aSPI, 200, 200)
        this.animationSpeed = 20;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
    } 



    animate(){
        if(this.y < 400 - this.height){
            this.#speed += this.#gravity;
            this.y += this.#speed;
            if(this.rotation < 90){
                this.rotation = this.#speed*25;
            }
        }
        else{
            EGameStatus.state = EGameStatus.gameOver;
            this.animationSpeed = 0;
        }
    }

    flap(){
        this.#speed = -4;
        this.rotation = 0;
    }
}