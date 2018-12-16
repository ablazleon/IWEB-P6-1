import React from 'react'
import Tips from "./Tips";

export default class Answer extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <div>
                <div>
                    <h3> Answer</h3>
                    <input type="text" value={this.props.currentQuestion.userAnswer || ''}
                           onChange={(e)=>{this.props.onIntroduceAnswer(e.target.value);}}/>
                </div>
                <div>
                    <h3> Tips </h3>
                    <Tips currentQuestion = {this.props.currentQuestion} />
                </div>
            </div>
        )
    }
}