import React from 'react';
import ReactDOM from 'react-dom';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(e) {
  e.preventDefault()
  var data = {
    name: this.refs.name.value,
    email: this.refs.email.value,
    password: this.refs.password.value,
  }
  this.props.saveValues(data)
  this.props.nextStep()
}

  render() {
    return (
      <div>
        <form id='accountInfo' onSubmit={this.nextStep}>
          <label>
            Name:
           <input type="text" ref="name" defaultValue={this.props.defaultValue.name}></input>
          </label>
          <br></br>
          <label>
            Email:
            <input type="text" ref="email" defaultValue={this.props.defaultValue.email}></input>
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" ref="password" defaultValue={this.props.defaultValue.password}></input>
          </label>
          <br></br>
          <input type="submit" form='accountInfo' value="Next" />
          <br></br>
          <button type="button" onClick={this.props.previousStep}>Back</button>
        </form>
      </div>
    );
  }
}


export default AccountInfo;