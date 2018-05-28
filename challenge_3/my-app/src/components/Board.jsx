import React, { Component } from "react";
import Cell from './Cell.jsx'

class Board extends Component {
  state = {
    boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
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
          let mine = 0;
          // let area = this.traverseBoard(cells[i][j].x, cells[i][j].y, cells)
          // eslint-disable-next-line
          // area.map( value => {
          //   if (value.isMine) {
          //     mine ++;
          //   }
          // });
          if (mine === 0) {
            updatedCells[i][j].isEmpty = true;
          }
          updatedCells[i][j].neighbor = mine;
        }
      }
    }
    return updatedCells;
  }

  traverseBoard(x, y, cells) {
    let board = [];
    // top
    if (x > 0) {
      board.push(cells[x-1][y]);
    }
    // bottom
    if (x < this.props.height - 1) {
      board.push(cells[x+1][y]);
    }
    // left
    if (y > 0) {
      board.push(cells[x][y-1]);
    }
    // right
    if (y < this.props.width - 1) {
      board.push(cells[x][y+1]);
    }
    // top left
    if (x > 0 && y > 0) {
      board.push(cells[x-1][y-1])
    }
    // top right
    if (x > 0 && y < this.props.width - 1) {
      board.push(cells[x-1][y-1]);
    }
    // bottom left
    if (x < this.props.height - 1 && y > 0) {
      board.push(cells[x+1][y-1])
    }
    // bottom right
    if (x < this.props.height - 1 && y < this.props.width - 1) {
      board.push(cells[x+1][y+1])
    }
    return board;
  }


  initBoardData(height, width, mines) {
    let data = this.createEmptyArray(height, width);
    data = this.plantMines(data, height, width, mines);
    data = this.getNeighbor(data, height, width);
    return data;
  }

  renderBoard(data) { 
    return data.map( (row) => {
      return row.map( (item) => {
        return (
          <div key={item.x + row.length + item.y}> 
            <Cell value={item}/>

          </div>
        );
      })
    })
  }

  render() {
    return (
      <div className='game'>
      {this.renderBoard(this.state.boardData)}
      </div>
    );
  }
}

export default Board;

  