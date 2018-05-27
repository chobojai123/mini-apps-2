import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Data from './Data.jsx';
import SearchForm from './SearchForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      events: [],
      pageCount: 5,
      pageNumber: 1
    }
    this.handlePageClick = this.handlePageClick.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getKeyword = this.getKeyword.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  getKeyword(keyword) {
    this.setState({
      event: keyword}, () => {
      this.getEvents();
    });
  }

  getEvents() {
    const {
      pageNumber,
      event,
      pageCount
    } = this.state
    axios.get(`http://localhost:3400/events?q=${event}&_page=${pageNumber}`)
      .then(event => {
        this.setState({
          events: event.data,
          pageCount: (event.headers['x-total-count'] / 10)
        })
      })
      .catch(err => console.log(err))
  }

  handlePageClick(data) {
    const {
      pageNumber
    } = this.state
    let selected = data.selected;
    console.log(selected);
    this.setState({ 
      pageNumber: selected + 1}, () => {
        this.getEvents();
    });
  };
  
  render() {
    return (
      <div className='event'>
        <SearchForm getKeyword={this.getKeyword} getEvents={this.getEvents}/>
        <br></br>
        <Data events={this.state.events}/>
        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
      </div>
    )
  }
}

export default App;







