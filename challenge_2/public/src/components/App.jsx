import React from 'react';
import Address from './Address.jsx';
import Home from './Home.jsx';
import AccountInfo from './AccountInfo.jsx';
import CreditCardInfo from './CreditCardInfo.jsx';
import Confirmation from './Confirmation.jsx'
import axios from 'axios';
import styles from './css/pay.scss'

const values = {
  name: null,
  email: null,
  password: null,
  line1: null,
  line2: null,
  city: null,
  state: null,
  zipcode: null,
  ccNum: null,
  expireDate: null,
  cvv: null,
  billingZip: null
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      defaultValue: ''
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.postInfo = this.postInfo.bind(this);
  }

  componentDidMount() {
    this.setState({
      defaultValue: values
    })
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    })
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    })
  }

  returnHome() {
    this.setState({
      step: 1
    })
  }

  postInfo() {
    const data = this.state.defaultValue;
    console.log('posted');
    console.log(data);
    axios.post('/payment', data)
      .then((response) => { console.log('posted') })
      .catch(err => console.log(err));
  }


  saveValues(field_value) {
    const defaultValue = Object.assign({}, this.state.defaultValue, field_value);
    this.setState({ 
      defaultValue 
    })
  }

  showStep(){
    switch (this.state.step) {
      case 1:
        return <Home 
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={this.saveValues}
          />
      case 2:
        return <AccountInfo
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          defaultValue={this.state.defaultValue}
          saveValues={this.saveValues}
          />
      case 3:
        return <Address
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          defaultValue={this.state.defaultValue}
          saveValues={this.saveValues}
          />
      case 4:
        return <CreditCardInfo
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          defaultValue={this.state.defaultValue}
          saveValues={this.saveValues}
          />
      case 5:
        return <Confirmation
          defaultValue={this.state.defaultValue}
          returnHome={this.returnHome}
          postInfo={this.postInfo}
        />
    }
  }

  render() {
    var style = {
      width: (this.state.step / 4 * 100) + '%'
    }
    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
}

export default App;




















// saveValues(field_value){
//   return function () {
//     fieldValues = assign({}, fieldValues, field_value)
//   }()
// }





// var fieldValues = {
//   name: null,
//   email: null,
//   password: null,
//   age: null,
//   colors: []
// }
