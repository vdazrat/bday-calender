import React from 'react';
import utils from '../../utils';
import './theme.css';

class UserInput extends React.PureComponent {
	state = {
		year: null,
		data: '',
	}

	getTextArea = () => {
		return (
			<div className="textArea">
				<textarea rows="20" value={this.state.data} onChange={(e) => this.setState({ data: e.target.value })}/>
				<div className="buttons">
					<button className="button" onClick={this.generateData}>Generate Random Data</button>
					<button className="button" onClick={this.setData}>Set Data</button>
				</div>
			</div>
		);
	};

	getYearInput = () => {
		return (
			<div className="year">
				<input type="text" placeholder="YYYY"  onChange={(e) => this.setState({ year: e.target.value })}/>
				<button className="button" onClick={this.setYear}>Set Year</button>
			</div>
		);
	};

	setYear = () => {
		if (isNaN(this.state.year)) {
			alert('Enter a Valid year');
			return;
		}
		this.props.setYear(this.state.year*1);
	};

	setData = () => {
		if (!this.isValidJSON(this.state.data)) {
			alert('Invalid Input');
			return;
		}
		this.props.setData(JSON.parse(this.state.data));
	};

	generateData = () => {
		const persons = utils.generateDates(10);
		this.setState({data: JSON.stringify(persons, null, 2)});
	};

	isValidJSON(data) {
		let parsedData;
		try {
			parsedData = JSON.parse(data);
		} catch (e) {
			return false;
		}
		if (!('length' in parsedData)) return false; // should be an array
		return parsedData.every(person => ('name' in person) && ('birthday' in person));

	}

	render () {
		return (
			<div className="userInputContainer">
				<div className="userInput">
					{this.getTextArea()}
					{this.getYearInput()}
				</div>
			</div>
		);
	}
}

export default UserInput;