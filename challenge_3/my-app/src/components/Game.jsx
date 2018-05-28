import React, { Component } from 'react';
import Board from './Board.jsx';

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 10,
      width: 10,
      mines: 10
    }
  }

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className='game'>
        <h1>Mine Sweeper</h1>
        <Board height={height} width={width} mines={mines}/>
      </div>
    );
  }
}

export default Game;