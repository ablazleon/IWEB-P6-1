import React from 'react'

export default class ActionBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    render(){
        console.log('It gets the onChangeQuestion in ActionBar');
        console.log(this.props.onChangeQuestion);
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
                <button onClick = { () => {this.props.onChangeQuestion('nextQ')}}>
                    Next
                </button>
               </span>
            </div>
        )
    }
}