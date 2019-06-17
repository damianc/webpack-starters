import React from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {counter: 0};
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<React.Fragment>
				{this.state.counter}
				<button onClick={this.handleClick}>+</button>
			</React.Fragment>
		);
	}
	handleClick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}
}
