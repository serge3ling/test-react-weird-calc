import React from "react";
import ReactDOM from "react-dom";
import Primes from "./primes.js";
import "./index.scss";

class Operand extends React.Component {
	render() {
		return (
			<input type="number" onChange={this.props.onChange}/>
		);
	};
}

class Operator extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
			Highest Prime Between Them
			</button>
		);
	}
}

class Calc extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            primes: (new Primes()),
            value1: 4,
            value2: 8
        }
    }

	handleClick() {
		alert("Clicked.");
	}

	handleChange1() {
		console.log("Changed 1.");
        this.setState({
            primes: this.state.primes,
            value1: 5,
            value2: this.state.value2
        });
	}

	handleChange2() {
		console.log("Changed 2.");
	}

	render() {
		return (
			<div>
			<p>
			<Operand
                onChange={this.handleChange1}
			/>
			</p>
			<p>
			<Operand
                onChange={this.handleChange2}
			/>
			</p>

			<p>
			<Operator
                onClick={this.handleClick}
			/>
			</p>
			</div>
		); // return
	}; // render
}

ReactDOM.render(<Calc />, document.getElementById("root"));