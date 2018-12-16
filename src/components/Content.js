import React from 'react'
import Question from "./Question";
import Answer from "./Answer";
import Imagen from "./Image";
import Score from './Score'
import "../assets/styles/index.css"
export default class Content extends React.Component {

    render(){
        // console.log('It gets the currentQuestion in Content');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Content');
        // console.log(this.props.onIntroduceAnswerGame);
        return(
            <div className="flex-container">
                <div>
                    <Question
                        currentIndex = {this.props.currentIndex}
                        currentQuestion={this.props.currentQuestion}
                    />
                    <Answer
                        currentQuestion={this.props.currentQuestion}
                        onIntroduceAnswer = { this.props.onIntroduceAnswerGame}
                    />
                    <Score 
                        score = {this.props.score}
                        finished = {this.props.finished}
                    />
                </div>
                <div>
                    <Imagen question={this.props.currentQuestion}/>
                </div>
            </div>
        )
    }
}