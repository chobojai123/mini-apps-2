import React, { Component } from 'react';
import axios from 'axios';

class Confirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.postInfo} >Purchase</button>
      </div>
    );
  }
}

export default Confirmation;