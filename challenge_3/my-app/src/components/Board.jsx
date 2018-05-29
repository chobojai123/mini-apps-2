import React, { Component } from "react";
import Cell from './Cell.jsx'

class Board extends Component {
  state = {
    boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
    gameStatus: 'Game has started',
    mineCount: this.props.mines
  }

  getRandomNumber(number) {
    // to get random spot and remainder
    return Math.floor((Math.random() * 1000) + 1) % number;
  }

  // create empty arrays to represent board
  createEmptyArray(height, width) {
    let cells = [];
    for (var i = 0; i < height; i++) {
      // push 10 empty rows into array
      cells.push([]);
      for (var j = 0; j < width; j++) {
        // give properties to each cell 
        cells[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbor: 0,
          isRevealed: false,
          isEmpty: false,
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
      for (var j = 0; j < width; j++) {
        if (cells[i][j].isMine !== true) {
          let mine = 0;
          let area = this.traverseBoard(cells[i][j].x, cells[i][j].y, cells)
          area.map( cell => {
            if (cell.isMine) {
              mine ++;
            }
          });
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
      board.push(cells[x-1][y+1]);
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
    let cells = this.createEmptyArray(height, width);
    cells = this.plantMines(cells, height, width, mines);
    cells = this.getNeighbor(cells, height, width);
    return cells;
  }

  // reveal board by updating each cell's reveal prob to true
  revealBoard() {
    let board = this.state.boardData;
    board.map( (row) => {
      row.map( (item) => {
        item.isRevealed = true;
      });
    })
    this.setState({
      boardData: board
    })
  }

  emptyBoard() {

  }


  handleClick(x, y) {
    const { boardData } = this.state;
    if (boardData[x][y].isRevealed) {
      return null;
    }
    if (boardData[x][y].isMine) {
      this.setState({ 
        gameStatus: 'Game Over'
       })
      this.revealBoard();
      alert('Game Over');
    }

    let data = this.state.boardData;
    
  }

  renderBoard(cells) { 
    return cells.map( (row) => {
      return row.map( (item) => {
        return (
          <div key={item.x * row.length * item.y}> 
            <Cell value={item}/>
          </div>
        );
      })
    })
  }

  render() {
    return (
      <div className='board'>
        <div className='game-info'>
          <h1 className='info'>MineSweeper</h1>
          <h2>
            {this.state.gameStatus}
          </h2>
        </div>
        {this.renderBoard(this.state.boardData)}
      </div>
    );
  }
}

export default Board;

  