import React from 'react'

export default class Question extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        console.log('currentQuestion in Question');
        console.log(this.props.currentQuestion);
        return(
            <div>
                {this.props.currentQuestion.question}
                <input type="text" value={this.props.currentQuestion.userAnswer || ''}
                       onChange={(e)=>{this.props.onIntroduceAnswer(e.target.value);}}/>
            </div>
        )
    }
}