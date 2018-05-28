import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mineSweep from './app/reducers/mineSweep.js';
import { RESET_BOARD } from "./app/actions/boardActions";
import logo from './logo.svg';
import './App.css';


const initAction = {
  type: RESET_BOARD,
}

class App extends Component {
  render() {
    const store = createStore(mineSweep);
    store.dispatch(initAction);

    return (
      <Provider store={store}>
        <h1>hello</h1>
      </Provider>
    );
  }
}

// export default App;
