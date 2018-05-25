import React from 'react';

class CreditCardInfo extends React.Component {
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
    event.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <div>
        <form id='creditCardInfo' onSubmit={this.handleSubmit}>
          <label>
            credit card #:
           <input type="text" id="line1" placeholder="line1"></input>
          </label>
          <br></br>
          <label>
            expirary date:
            <input type="text" id="line2" placeholder="line2"></input>
          </label>
          <br></br>
          <label>
            CVV:
            <input type="text" id="city" placeholder="city"></input>
          </label>
          <br></br>
          <label>
            billing zip code:
            <input type="text" id="state" placeholder="state"></input>
          </label>
          <br></br>
          <input type="submit" form='creditCardInfo' value="Next" />
          <br></br>
          <button type="button" onClick={this.props.previousStep}>Back</button>
        </form>
      </div>
    );
  }
}

export default CreditCardInfo;