import React from 'react'

export default class ActionBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        console.log('It gets the currentQuestion in Game');
        console.log(this.props.currentQuestion);
        return(
            <div>
               <span>
                <button>
                    Previous
                </button>
               </span>

                <span>
                <button>
                    Submit
                </button>
               </span>

                <span>
                <button onClick = {() => {this.props.onChangeQuestion('nextQ');}}>
                    Next
                </button>
               </span>
            </div>
        )
    }
}