import React from 'react';
import Address from './Address.jsx';
import Home from './Home.jsx';
import AccountInfo from './AccountInfo.jsx';
import CreditCardInfo from './CreditCardInfo.jsx';
import Confirmation from './Confirmation.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.returnHome = this.returnHome.bind(this);
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

  showStep(){
    switch (this.state.step) {
      case 1:
        return <Home 
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          />
      case 2:
        return <AccountInfo
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          />
      case 3:
        return <Address
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          />
      case 4:
        return <CreditCardInfo
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          />
      case 5:
        return <Confirmation
          returnHome={this.returnHome}
        />
    }
  }

  render() {
    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
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
