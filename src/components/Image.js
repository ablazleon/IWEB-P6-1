import React from 'react'

export default class Imagen extends React.Component {

    render(){
        return(
            <div>
                <div>
                    <img src={this.props.question.attachment.url} alt={this.props.question.filename} width="500px"/>
                </div>
            </div>
        )
    }
}