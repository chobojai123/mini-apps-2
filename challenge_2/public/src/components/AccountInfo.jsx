import React from 'react';

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('next')
    event.preventDefault();
    this.props.nextStep();
  }


  render() {
    return (
      <div>
        <form id='accountInfo' onSubmit={this.handleSubmit}>
          <label>
            Name:
           <input type="text" id="name" placeholder="Your name.."></input>
          </label>
          <br></br>
          <label>
            Email:
            <input type="text" id="email" placeholder="Your email."></input>
          </label>
          <br></br>
          <label>
            Password:
            <input type="text" id="password" placeholder="Your password.."></input>
          </label>
          <button type="button" onClick={this.props.previousStep}>Back</button>
          <input type="submit" form='accountInfo' value="Next"  />
        </form>
      </div>
    );
  }
}


export default AccountInfo;