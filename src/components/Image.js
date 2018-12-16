import React from 'react'

export default class Imagen extends React.Component {
    // style={{flex:1, height: undefined, width: undefined}}
    render(){
        return(
            <div>
                <div>
                    <img
                    src={this.props.question.attachment.url} alt={this.props.question.filename}
                    style={{flex:1, height: '80%', width: '80%'}}
                    resizeMode="center"
                    />
                </div>
            </div>
        )
    }
}