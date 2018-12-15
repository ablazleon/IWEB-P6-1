import React from 'react'

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
                    <h3> Pistas </h3>

                </div>
            </div>
        )
    }
}