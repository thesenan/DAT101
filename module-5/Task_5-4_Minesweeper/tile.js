"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel } from "./Minesweeper.mjs";

let tiles = [];

export class TTile extends TSpriteButton {
  #mine;

  constructor(aSpcvs, aSPI, aCol, aRow) {
    const pos = new TPoint(20, 133);
    pos.x += aSPI.width * aCol;
    pos.y += aSPI.height * aRow;
    super(aSpcvs, aSPI, pos.x, pos.y);
    this.#mine = false;
  }

  get isMine() {
    return this.#mine;
  }

  set isMine(aValue) {
    this.#mine = aValue;
  }

  get open() {
    return this.index === 2;
  }

  //Override function

  onMouseDown(aEvent) {
    this.index = 1;
    super.onMouseDown(aEvent);
  }

  onMouseUp(aEvent) {
    this.index = 2;
    super.onMouseUp(aEvent);
  }

  onMouseLeave(aEvent) {
    if (this.open === false) {
      this.index = 0;
    }
    super.onMouseLeave(aEvent);
  }
} //End of TTile

export function createMines() {
  let mineCount = 0;
  const colCount = gameLevel.Tiles.Col;
  const rowCount = gameLevel.Tiles.Col;
  do {
    const col = Math.floor(Math.random() * colCount);
    const row = Math.floor(Math.random() * rowCount);
    const tile = tiles[col][row];
    if (tile.isMine === false) {
      tile.isMine = true;
      mineCount++;
    }
  } while (mineCount <= 5);
}

export function createTiles(aSpcvs, aSPI) {
  console.log(gameLevel);
  const glTiles = gameLevel.Tiles;
  const colCount = glTiles.Col;
  const rowCount = glTiles.Row;

  for (let col = 0; col < colCount; col++) {
    const rows = [];
    for (let row = 0; row < rowCount; row++) {
      const newTile = new TTile(aSpcvs, aSPI, col, row);
      //tiles.push(newTile);
      rows.push(newTile);
    }
    tiles.push(rows);
  }
  console.log(tiles);
} //End of createTiles

export function drawTiles() {
  const colCount = gameLevel.Tiles.Col;
  const rowCount = gameLevel.Tiles.Row;
  for (let col = 0; col < colCount.length; col++) {
    const row = tiles[col];
    //const tile = tiles[i];
    for (let row = 0; row < rowCount; row++) {
      const tile = rows[row];
      tile.draw();
    }
    //tile.draw();
  }
} // End of drawTiles
