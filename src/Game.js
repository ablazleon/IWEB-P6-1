import React from 'react'

export default class Game extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        console.log('Game');
        return(
            <div>
                {this.props.currentQuestion.question}
                <input type="text" value={this.props.currentQuestion.userAnswer || ''}/>
            </div>
        )
    }
}