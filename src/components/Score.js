import React from "react"

export default class Score extends React.Component {
	render() {
		return(
			<div>
				<h3>Puntuación</h3>		
				<p>
					{this.props.finished ? this.props.score : "Tiene que entregar las respuestas."}
				</p>
			</div>
		);
	}
}