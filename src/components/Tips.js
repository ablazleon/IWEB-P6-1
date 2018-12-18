import React from 'react'

export default class Tips extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <ul>
                {this.props.currentQuestion.tips.map((tip, i) => {
                    return(
                        <li key = {'' +i}> {tip} </li>
                        )
                })
                }
            </ul>
        )

    }
}
