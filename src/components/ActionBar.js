import React from 'react'
import '../assets/styles/index.css'

export default class ActionBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        // console.log('It gets the onChangeQuestion in ActionBar');
        // console.log(this.props.onChangeQuestion);

        // console.log('Length of questions')
        // console.log(this.props.questionsLength);

        // If it's index is the first it disable the button
        return(
            <div>
               <span>
                <button  onClick ={() => {
                    if ((this.props.currentIndex ) !== 0) {
                        this.props.onChangeQuestion('previuosQ')
                    }
                }
                }
                     className = {(this.props.currentIndex) === 0 ? "no_clickable" : "clickable"}>
                    Previous
                </button>
               </span>

                <span>
                <button onClick={ () => {
                    this.props.onSubmit()
                    }
                }
                >
                    Submit
                </button>
               </span>

                <span>
                <button
                    onClick = {  () =>{
                        // Only if the index + 1 is not the length, it runs.
                        if((this.props.currentIndex+1) !== this.props.questionsLength){
                            this.props.onChangeQuestion('nextQ')
                        }
                    }
                }
                    className = {(this.props.currentIndex+1) === this.props.questionsLength ? "no_clickable" : "clickable"}
                >
                    Next
                </button>
               </span>
            </div>
        )
    }
}