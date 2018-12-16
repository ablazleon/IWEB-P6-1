import React from 'react'
import Content from "./Content";
import ActionBar from "./ActionBar";
import {fetchState} from "../redux/actions";

export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }


    componentDidMount(){
        // console.log("Only fetch once");
        this.props.dispatch(fetchState());
    }

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
                    finished = {this.props.finished}
                    score = {this.props.score}
                />
                <ActionBar
                    onChangeQuestion = {this.props.onChangeQuestion}
                    currentIndex = {this.props.currentIndex}
                    questionsLength = {this.props.questionsLength}
                    onSubmit = {this.props.onSubmit}
                />

            </div>
        )
    }
}