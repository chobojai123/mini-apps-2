import React from 'react';

class CreditCardInfo extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(e) {
    e.preventDefault()
    var data = {
      ccNum: this.refs.ccNum.value,
      expireDate: this.refs.expireDate.value,
      cvv: this.refs.cvv.value,
      billingZip: this.refs.billingZip.value,
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }

  render() {
    return (
      <div>
        <form id='creditCardInfo' onSubmit={this.nextStep}>
          <label>
            credit card #:
           <input type="text" ref='ccNum' ></input>
          </label>
          <br></br>
          <label>
            expirary date:
            <input type="text" ref='expireDate' ></input>
          </label>
          <br></br>
          <label>
            CVV:
            <input type="text" ref='cvv' ></input>
          </label>
          <br></br>
          <label>
            billing zip code:
            <input type="text" ref='billingZip' ></input>
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