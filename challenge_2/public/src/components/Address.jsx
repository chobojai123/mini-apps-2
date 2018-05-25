import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep(e) {
    e.preventDefault()
    var data = {
      line1: this.refs.line1.value,
      line2: this.refs.line2.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zipcode: this.refs.zipcode.value,
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }

  render() {
    return (
      <div>
        <form id='address' onSubmit={this.nextStep}>
          <label>
            line 1:
           <input type="text" ref='line1' id="line1" ></input>
          </label>
          <br></br>
          <label>
            line 2:
            <input type="text" ref='line2' id="line2" ></input>
          </label>
          <br></br>
          <label>
            city:
            <input type="text" ref='city' id="city" ></input>
          </label>
          <br></br>
          <label>
            state:
            <input type="text" ref='state' id="state" ></input>
          </label>
          <br></br>
          <label>
            zip code:
            <input type="text" ref='zipcode' id="zipcode" ></input>
          </label>
          <br></br>
          <input type="submit" form='address' value="Next" />
          <br></br>
          <button type="button" onClick={this.props.previousStep}>Back</button>
        </form>
      </div>
    );
  }
}

export default Address;