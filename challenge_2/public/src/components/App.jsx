import React from 'react';
import Address from './Address.jsx';
import Home from './Home.jsx';
import AccountInfo from './AccountInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
  }

  saveValues(field_value){
    return function () {
      fieldValues = assign({}, fieldValues, field_value)
    }()
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


  showStep(){
    switch (this.state.step) {
      case 1:
        return <Home 
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={this.saveValues} />
      case 2:
        return <AccountInfo
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          saveValues={this.saveValues} />
      case 3:
        return <Address
          previousStep={this.previousStep}
          submitRegistration={this.submitRegistration} />
    }
  }

  render() {
    var style = {
      width: (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        {this.showStep()}
      </main>
    )
  }
}

export default App;

























// var fieldValues = {
//   name: null,
//   email: null,
//   password: null,
//   age: null,
//   colors: []
// }
