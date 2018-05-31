import React, { Component } from "react";
import Cell from './Cell.jsx'

class Board extends Component {
  state = {
      boardData: this.initBoardData(this.props.height, this.props.width, this.props.mines),
      gameStatus: 'Game has started!',
    }

  // to get random spot and remainder
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
          let board = this.traverseBoard(cells[i][j].x, cells[i][j].y, cells)
          board.map( cell => {
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
    if (x > 0) {  // top
      board.push(cells[x-1][y]);
    }
    if (x < this.props.height - 1) {  // bottom
      board.push(cells[x+1][y]);
    }
    if (y > 0) { // left
      board.push(cells[x][y-1]);
    }
    if (y < this.props.width - 1) {   // right
      board.push(cells[x][y+1]);
    }
    if (x > 0 && y > 0) {    // top left
      board.push(cells[x-1][y-1])
    }
    if (x > 0 && y < this.props.width - 1) {    // top right
      board.push(cells[x-1][y+1]);
    }
    if (x < this.props.height - 1 && y > 0) {   // bottom left
      board.push(cells[x+1][y-1])
    }
    if (x < this.props.height - 1 && y < this.props.width - 1) {    // bottom right
      board.push(cells[x+1][y+1])
    }
    return board;
  }


  // start up board function, first create array, second plant mines, third determine values for cells
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

  // empty cells should be revealed as well when clicked
  revealEmptyCell(x, y, cells) {
    let board = this.traverseBoard(x, y, cells);
    board.map( (cell) => {
      if (!cell.isRevealed && (cell.isEmpty || !cell.isMine)) {
        cells[cell.x][cell.y].isRevealed = true;
        if (cell.isEmpty) {
          this.revealEmptyCell(cell.x, cell.y, cells);
        }

      }
    });
    return cells;
  }

  getHiddenCell(data) {
    let array = [];
    data.map( (row) => {
      row.map( (item) => {
        if (!item.isRevealed) {
          array.push(item);
        }
      })
    })
    return array;
  }


  handleClick(x, y) {
    if (this.state.boardData[x][y].isRevealed) {
      return null;
    }
    if (this.state.boardData[x][y].isMine) {
      this.setState({ gameStatus: "You Lost!" });
      this.revealBoard();
      alert('Game Over!');
    }

    let updatedCell = this.state.boardData;
    updatedCell[x][y].isRevealed = true;

    if (updatedCell[x][y].isEmpty) {
      updatedCell = this.revealEmptyCell(x, y, updatedCell);
    }
    console.log(this.getHiddenCell(updatedCell).length);

    if (this.getHiddenCell(updatedCell).length === this.props.mines) {
      this.setState({ gameStatus: "You Win!" });
      this.revealBoard();
      alert("You Win!");
    }

    this.setState({
      boardData: updatedCell,
    });
  }

  renderBoard(cells) { 
    return cells.map( (row) => {
      return row.map( (item) => {
        return (
          <div key={item.x * row.length + item.y}> 
            <Cell
              onClick={() => this.handleClick(item.x, item.y)} 
              cell={item}/>
          </div>
        );
      })
    })
  }

  render() {
    return (
      <div className='board'>
        <div className='board-info'>
          <h1 className='info'>MineSweeper 💣</h1>
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

  