import React, { Component } from 'react';

class Cell extends Component {
  getValue() {
    const { cell } = this.props
    if (!cell.isRevealed) {
      return null;
    }
    if (cell.isMine) {
      return "💣";
    }
    if (cell.neighbor === 0) {
      return null;
    }
    return cell.neighbor;
  }

  render() {
    const { cell, onClick} = this.props;
    let className =
      "cell" +
      (cell.isRevealed ? "" : " hidden") 
    return (
      <div 
        className={className}
        onClick={onClick}
      >
      {this.getValue()}  
      </div>
    )
  }
}

export default Cell;