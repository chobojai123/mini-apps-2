import React, { Component } from 'react';
import axios from 'axios';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.postInfo = this.postInfo.bind(this);
  }



  postInfo() {
    const data = this.props.defaultValue;
    axios.post('/payment', data)
      .then((response) => { console.log('posted') })
      .catch(err => console.log(err));
    this.props.returnHome();  
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.postInfo} >Purchase</button>
      </div>
    );
  }
}

export default Confirmation;