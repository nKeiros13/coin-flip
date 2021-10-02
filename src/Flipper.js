import React, { Component } from "react";
import "./Flipper.css";
import Head from "./Head";
import Tail from "./Tail";

class Flipper extends Component {
	constructor(props) {
		super(props);
		this.state = { isHead: true, numHead: 1, numTail: 0, numClicks: 0 };
		this.handleClick = this.handleClick.bind(this);
	}
	flip() {
		let num = Math.floor(Math.random() * 2) + 1;
		if (num === 1) {
			this.setState({
				isHead: true,
				numHead: this.state.numHead + 1,
				numClicks: this.state.numClicks + 1,
			});
		} else {
			this.setState({
				isHead: false,
				numTail: this.state.numTail + 1,
				numClicks: this.state.numClicks + 1,
			});
		}
	}
	handleClick() {
		this.flip();
	}
	render() {
		return (
			<div className="Flipper">
				<section className="Flipper-nav"> </section>
				<section>{this.state.isHead ? <Head /> : <Tail />}</section>
				Click emoji to Flip!
				<button onClick={this.handleClick} className="Flipper-btn">
					😚
				</button>
				<br />
				<h3 className="font-link Flipper-numhead">
					Out of {this.state.numClicks} clicks, there has been --&nbsp;
				</h3>
				<h3 className="font-link Flipper-numhead">
					{this.state.numHead} Heads /&nbsp;
				</h3>
				<h3 className="font-link Flipper-numtail">
					{this.state.numTail} Tails
				</h3>
			</div>
		);
	}
}

export default Flipper;
