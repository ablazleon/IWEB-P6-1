import React, { Component } from 'react';
import './App.css';

import Game from './Game'

// Pass the store
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log(this.props.questions)
      console.log(this.props.questions[this.props.indexCurrentQuestion])
      // In Game i say to create as props the question i want to handle
    return (
      <div className="App">
        <Game currentQuestion={this.props.questions[this.props.indexCurrentQuestion]}/>
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
