"use strict";
import { TSprite, TSpriteButtonHaptic } from "libSprite";
import { newGame, spcvs, SpriteInfoList } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";

//Creating board and menu elements, and draw functions
export class TMenu {
  #board;
  #newGameBtn;
  #checkAnswerBtn;
  #cheatBtn;
  #panelHA; //Is called hideAnswer on lecture code

  constructor() {
    const x = [MastermindBoard.ButtonNewGame.x, MastermindBoard.ButtonCheckAnswer.x, MastermindBoard.ButtonCheat.x, MastermindBoard.PanelHideAnswer.x];
    const y = [MastermindBoard.ButtonNewGame.y, MastermindBoard.ButtonCheckAnswer.y, MastermindBoard.ButtonCheat.y, MastermindBoard.PanelHideAnswer.y];

    this.#board = new TSprite(spcvs, SpriteInfoList.Board, 0, 0);
    this.#newGameBtn = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonNewGame, x[0], y[0]);
    this.#checkAnswerBtn = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonCheckAnswer, x[1], y[1]);
    this.#cheatBtn = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonCheat, x[2], y[2]);
    this.#panelHA = new TSprite(spcvs, SpriteInfoList.PanelHideAnswer, x[3], y[3]);

    this.#checkAnswerBtn.disabled = true;
    this.#cheatBtn.onClick = this.#cheatBtnOnClick.bind(this);
    this.#newGameBtn.onClick = this.#newGameBtnOnClick.bind(this);
    this.#checkAnswerBtn.onClick = this.#checkAnswerBtnOnClick.bind(this);
  }
  setCheckAnserDisabled(aDisabled){
    this.#checkAnswerBtn.disabled = aDisabled;
  }
  #checkAnswerBtnOnClick() {

  }

  #newGameBtnOnClick() {
    newGame();
  }

  #cheatBtnOnClick() {
    this.#panelHA.hidden = !this.#panelHA.hidden;
  }

  draw() {
    this.#newGameBtn.draw();
    this.#checkAnswerBtn.draw();
    this.#cheatBtn.draw();
    this.#panelHA.draw();
  }

  drawBackground() {
    this.#board.draw();
  }
}
