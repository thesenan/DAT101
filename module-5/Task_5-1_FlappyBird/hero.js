"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";

export class THero extends TSprite{
    #gravity
    #speed
    #wave;
    constructor(aSpvcs, aSPI){
        //const xPos = this.spriteBackground.height/this.spriteBackground.width;
        
        super(aSpvcs, aSPI, 100, 150)
        this.animationSpeed = 20;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
        this.debug = false;
        this.#wave = new TSineWave(1, 1);
    } 

    animate(){
        const hasGravity = 
            EGameStatus.state === EGameStatus.gaming || 
            EGameStatus.state === EGameStatus.heroIsDead;

        if(hasGravity){
            if(this.y < 400 - this.height){
                this.#speed += this.#gravity;
                this.y += this.#speed;
                if(this.rotation < 90){
                    this.rotation = this.#speed*25;
                }
            }else {
                EGameStatus.state = EGameStatus.gameOver;
                this.animationSpeed = 0;
                }
        }
        else if(EGameStatus.state === EGameStatus.idle){
            this.y += this.#wave.value;
        }
        
    }

    flap(){
        this.#speed = -3;
        this.rotation = 0;
    }
}