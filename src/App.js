import React, { Component } from 'react';
import './App.css';

import Game from './Game'

// Pass the store
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log(this.props.questions)
    return (
      <div className="App">
        {Game}
        Test
      </div>
    );
  }
}

// It is given the state as props
function mapStateToProps(state){
    return{
      ...state
    };
}

export default connect(mapStateToProps)(App);
