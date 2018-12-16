import React, { Component } from 'react';
import '../App.css';

import Game from './Game'

// Pass the store
import { connect } from 'react-redux';
import {changeQuestion, fetchState, introduceAnswer, submit} from "../redux/actions";
import NavBar from "./NavBar";


class App extends Component {

    // Isn't it curious don't calling the constructor to give to child props
    // contructor(props){
    //     super(props);
    //     this.appSaveAnswer = this.appSaveAnswer.bind(this)
    // }


    componentDidMount(){
        // console.log("Only fetch once");

        // console.log("What it is fecthState?");
        // console.log(fetchState());
        this.props.dispatch(fetchState());
    }

  render() {
    console.log('Props in App')
    console.log(this.props);
      // It is checked it is changed the first userAnswer
    //console.log(this.props.questions[this.props.indexCurrentQuestion])
      // In Game i say to create as props the question i want to handle

      // console.log('Length of questions')
      // console.log(this.props.questions.length);



    return (
      <div className="App">
        <NavBar/>
        <Game
            currentQuestion={this.props.questions[this.props.indexCurrentQuestion]}
            currentIndex = {this.props.indexCurrentQuestion}
            onIntroduceAnswer={ (answer) => {this.props.dispatch(introduceAnswer(answer, this.props.indexCurrentQuestion))}}
            onChangeQuestion = { (change) => { this.props.dispatch(changeQuestion(this.props.indexCurrentQuestion, change))}}
            questionsLength = {this.props.questions.length}
            finished = {this.props.finished}
            score = {this.props.score}
            onSubmit = {()=>this.props.dispatch(submit(this.props.questions))}
            fetch = {this.props.fetch}
        />
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
