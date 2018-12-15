import React from 'react'
import Question from "./Question";
import Answer from "./Answer";
import Imagen from "./Image";
import "../assets/styles/index.css"
export default class Content extends React.Component {

    render(){
        console.log('It gets the currentQuestion in Content');
        console.log(this.props.currentQuestion);
        return(
            <div className="flex-container">
                <div>
                    <Imagen/>
                </div>
                <div>
                    <Question currentQuestion={this.props.currentQuestion}/>
                    <Answer/>
                </div>
            </div>
        )
    }
}