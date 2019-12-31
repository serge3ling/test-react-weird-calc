import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Operand extends React.Component {
	render() {
		return (
			<div>
			</div>
		);
	};
}

class Calc extends React.Component {
	render() {
		return (
			<div>
			Yes.
			</div>
		);
	};
}

ReactDOM.render(<Calc />, document.getElementById("root"));