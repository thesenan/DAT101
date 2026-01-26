"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { EGameStatus, startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
    #spTitle;
    #spPlayBtn;
    #spGetReady;
    #spGameOver;
    #spScoreBoard;
    #spGameScore;
    #spCountDown;
    #sfCountDown;
    #sfRunning;

    constructor(aSpcvs, aSPI){
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird,200,100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay,230,150);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
        this.#spGetReady.index = 0;
        this.#spGetReady.hidden = true;
        this.#spGameOver = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
        this.#spGameOver.index = 1;
        this.#spGameOver.hidden = true;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
        this.#spGameScore.alpha = 0.5;
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
        this.#spCountDown.visible = false;
        this.#sfCountDown = null;
        this.#sfRunning = null;
        this.#spScoreBoard = new TSprite(aSpcvs, aSPI.gameOver, 175, 200);
        this.#spScoreBoard.hidden = true;

    }
    
    draw(){
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
        this.#spGetReady.draw();
        this.#spGameOver.draw();
        this.#spScoreBoard.draw();
        this.#spGameScore.draw();
    }

    countDown(){
        if(this.#spCountDown.value > 1){
            this.#spCountDown.value--;
            setTimeout(this.countDown.bind(this), 1000);
        }
        else{
            EGameStatus.state = EGameStatus.gaming;
            this.#spGetReady.hidden = true;
            this.#spCountDown.visible = false;
            this.#sfRunning = new TSoundFile(fnRunning);
            this.#sfRunning.play();
            startGame();
        }
    }

    incGameScore(aScore){
        this.#spGameScore.value += aScore;
    }

    gameOverMenu(){
        this.#spGameOver.hidden = false;
        this.#spScoreBoard.hidden = false;
        this.#spGameScore.visible = false;
        this.draw(this.#spGameScore, 100, 100);
    }

    stopSound(){
        this.#sfRunning.stop();
    }

    spPlayBtnClick(){
        console.log("Click!");
        EGameStatus.state = EGameStatus.countDown;
        this.#spPlayBtn.hidden = true;
        this.#spTitle.hidden = true;
        this.#spGetReady.hidden = false;
        this.#spCountDown.visible = true;
        this.#spCountDown.value = 3;
        this.#sfCountDown = new TSoundFile(fnCountDown);
        this.#sfCountDown.play();
        setTimeout(this.countDown.bind(this), 1000);
    }
}