import React, { Component } from 'react';
import Board from './Board.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 10,
      width: 10,
      mines: 14
    }
  }

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className='minesweeper'>
        <Board height={height} width={width} mines={mines}/>
      </div>
    );
  }
}

export default App;