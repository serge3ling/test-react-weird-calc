import React from "react";
import ReactDOM from "react-dom";
import Primes from "./primes.js";
import "./index.scss";

class Operand extends React.Component {
	render() {
		return (
			<input type="number" onChange={(eve) => this.props.onChange(+eve.target.value)}/>
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

class HistoryItem {
    constructor(counter, value1, operator, value2, result) {
        this.counter = counter;
        this.value1 = value1;
        this.operator = operator;
        this.value2 = value2;
        this.result = result;
    }
}

class Calc extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            primes: (new Primes()),
            history: [],
            historyCntr: 0,
            value1: 0,
            value2: 0
        }
    }

    number1Callback = (msg) => { this.setState({value1: msg}); };
    number2Callback = (msg) => { this.setState({value2: msg}); };

	handleClick() {
		const v1 = this.state.value1;
        const v2 = this.state.value2;
        const primes = this.state.primes;
        const highest = primes.highestBetween(v1, v2);

        if (highest > 1) {
            let history = this.state.history;
            const historyCntr = this.state.historyCntr + 1;
            history.push(new HistoryItem(historyCntr, v1, primes.binaryOperatorNotation(), v2, highest));
            this.setState({
                historyCntr: historyCntr,
                history: history
            });
        } else {
            alert("No prime number between " + v1 + " and " + v2 + ".");
        }
	}

	render() {
		const operations = this.state.history.map((item) => {
            return (
                <tr key={item.counter}>
                <td>{item.value1}</td>
                <td>{item.operator}</td>
                <td>{item.value2}</td>
                <td>=</td>
                <td>{item.result}</td>
                </tr>
            );
        });

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

            <table>
            <tbody>
            {operations}
            </tbody>
            </table>
			</div>
		); // return
	}; // render
}

ReactDOM.render(<Calc />, document.getElementById("root"));
