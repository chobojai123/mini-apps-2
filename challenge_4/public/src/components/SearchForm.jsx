import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);

  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    })
  }  

  search() {
    this.props.getKeyword(this.state.keyword)
  }
  
  render() {
    return (
      <div className='search'>
        <h4>Search for historical event</h4>
        Enter keyword: <input value={this.state.keyword} onChange={this.handleChange}/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}

export default SearchForm;