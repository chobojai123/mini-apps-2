import React, { Component } from 'react';

class Cell extends Component {
  getValue() {
    const { value } = this.props
    if (!value.isRevealed) {
      return this.props.value.isFlagged ? "flag" : null;
    }
    if (value.isMine) {
      return "mine";
    }
    if (value.neighbor === 0) {
      return null;
    }
    return value.neighbor;
  }

  render() {
    // const { value, onClick, cMenu } = this.props;
    return (
      <div 
        // onClick={this.props.onClick}
        // onContextMenu={this.props.cMenu}
      >
      {this.getValue()}  
      </div>
    )
  }
}

export default Cell;