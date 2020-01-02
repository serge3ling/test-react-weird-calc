import React from "react";
import ReactDOM from "react-dom";
import Primes from "./primes.js";
import "./index.scss";

class Operand extends React.Component {
	render() {
		return (
			<input type="number" onChange={(eve) => this.props.onChange(eve.target.value)}/>
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
            value1: 0,
            value2: 0
        }
    }

    number1Callback = (msg) => { this.setState({value1: msg}); };
    number2Callback = (msg) => { this.setState({value2: msg}); };

	handleClick() {
		const v1 = this.state.value1;
        const v2 = this.state.value2;
        console.log("" + v1 + " {highest_prime} " + v2 + " = " + this.state.primes.highestBetween(v1, v2));
	}

	render() {
		return (
			<div>
			<p>
			<Operand
                onChange={this.number1Callback}
			/>
			</p>
			<p>
			<Operand
                onChange={this.number2Callback}
			/>
			</p>

			<p>
			<Operator
                onClick={() => this.handleClick()}
			/>
			</p>
			</div>
		); // return
	}; // render
}

ReactDOM.render(<Calc />, document.getElementById("root"));