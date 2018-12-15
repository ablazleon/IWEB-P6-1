import React from 'react'

export default class Question extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){

        // console.log('indexCurrent');
        // console.log(this.props.currentIndex);

        return(
            <div>
                <h1>Question {this.props.currentIndex + 1} </h1>
                <h2>{this.props.currentQuestion.question} </h2>
            </div>
        )
    }
}