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
  }

  render() {
    return (
      <div className='accountInfo'>

        <form onSubmit={this.handleSubmit}>
          <label>
            line 1:
           <input type="text" id="line1" placeholder="line1"></input>
          </label>
          <br></br>
          <label>
            line 2:
            <input type="text" id="line2"  placeholder="line2"></input>
          </label>
          <br></br>
          <label>
            city:
            <input type="text" id="city"  placeholder="city"></input>
          </label>
          <br></br>
          <label>
            state:
            <input type="text" id="state" placeholder="state"></input>
          </label>
          <br></br>
          <label>
            zip code:
            <input type="text" id="zipcode" placeholder="zipcode"></input>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default AccountInfo;