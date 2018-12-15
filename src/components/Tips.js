import React from 'react'

export default class Tips extends React.Component {

    render(){
        // console.log('currentQuestion in Answer');
        // console.log(this.props.currentQuestion);
        // console.log('It gets the onIntroduceAnswer in Answer');
        // console.log(this.props.onIntroduceAnswer);
        return(
            <div>
                {this.props.currentQuestion.tips.map((tip, i) => {
                    return(
                        <div key = {'' +i}>
                            - {tip}
                        </div>
                        )
                })
                }
            </div>
        )

    }
}