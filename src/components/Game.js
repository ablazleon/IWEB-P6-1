import React from 'react'
import Content from "./Content";
import ActionBar from "./ActionBar";

export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        // console.log('It gets the currentQuestion in Game');
        // console.log(this.props.currentQuestion);

        // console.log('It gets the onIntroduceAnswer in Game');
        // console.log(this.props.onIntroduceAnswer);

        // console.log('It gets the onChangeQuestion in Game');
        // console.log(this.props.onChangeQuestion);
        return(
            <div>
                <Content
                    currentQuestion={this.props.currentQuestion}
                    currentIndex = {this.props.currentIndex}
                    onIntroduceAnswerGame = {this.props.onIntroduceAnswer}
                />
                <ActionBar
                    onChangeQuestion = {this.props.onChangeQuestion}
                    currentIndex = {this.props.currentIndex}
                    questionsLength = {this.props.questionsLength}
                />

            </div>
        )
    }
}