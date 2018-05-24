import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.nextStep} >CHECK OUT!</button>
      </div>
    );
  }
}

export default Home;