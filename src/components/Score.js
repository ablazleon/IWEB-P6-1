import React from "react"

export default class Score extends React.Component {
	render() {
		return(
			<div>
				<h3>Score:</h3>
				<p>
					{this.props.finished ? this.props.score : "No answers, no score."}
				</p>
			</div>
		);
	}
}
