import React from 'react'
import Content from "./Content";
import ActionBar from "./ActionBar";

export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        console.log('It gets the currentQuestion in Game');
        console.log(this.props.currentQuestion);
        return(
            <div>
                <Content
                    currentQuestion={this.props.currentQuestion}
                    currentIndex = {this.props.currentIndex}
                />
                <ActionBar

                />

            </div>
        )
    }
}