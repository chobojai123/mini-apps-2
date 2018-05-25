import React, { Component } from 'react';

class Confirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.returnHome} >Purchase</button>
      </div>
    );
  }
}

export default Confirmation;