import React, { Component } from 'react';

class Cell extends Component {
  getValue() {
    const { cell } = this.props
    if (!cell.isRevealed) {
      return this.props.cell.isFlagged ? "flag" : null;
    }
    if (cell.isMine) {
      return "mine";
    }
    if (cell.neighbor === 0) {
      return null;
    }
    return cell.neighbor;
  }

  render() {
    const { cell, onClick, cMenu } = this.props;
    return (
      <div 
        onClick={this.props.onClick}
        onContextMenu={this.props.cMenu}
      >
      {this.getValue()}  
      </div>
    )
  }
}

export default Cell;