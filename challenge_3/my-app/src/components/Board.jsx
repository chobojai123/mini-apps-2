import React from "react";
import PropTypes from "prop-types";

class Board extends Component {
  state = {
    boardData: this.initBoardData(this.props.height, this.props.width, this.props,mines),
    gameStatus: false,
    mineCount: this.props.mines
  }

  getRandomNumber(number) {
    return Math.floor((Math.random() * 1000) + 1) % number;
  }

  // create empty arrays to represent board
  createEmptyArray(height, width) {
    let cells = [];
    for (var i = 0; i < height; i++) {
      // push 10 empty rows into array
      cells.push([]);
      for (var j = 0; j < width; j++) {
        cells[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbor: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        }
      }
    }
    return cells;
  }

  // plant mines at random locations
  plantMines(cells, height, width, mines) {
    let randomx, randomy, planted = 0;
    while (planted < mines) {
      randomx = this.getRandomNumber(width);
      randomy = this.getRandomNumber(height);
      if (!(cells[randomx][randomy].isMine)) {
        // check if the cell is already a mine, if its not, set it to true
        cells[randomx][randomy].isMine = true;
        // increment planted mines count
        planted ++;
      }
    }
    return cells;
  }

  getNeighbor(cells, height, width) {
    let updatedCells = cells;
    for (var i = 0; i < height; i++) {
      for(var j = 0; j < width; j++) {
        if (cells[i][j].isMine !== true) {

        }
      }
    }
  }

  traverseBoard(x, y, cells) {
    let board = [];
    if (x > 0) {
      board.push(cells[x-1][y])
    }
    if (x < this.props.height) {
      board.push(cells[x+1[y]])
    }
  }


  initBoardData(height, width, mines) {

  }







  render() {

    return (
      <div className='game'>

        <h1>test</h1>
      </div>
    );
  }
}

export default Board;

  