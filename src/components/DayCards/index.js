import React from 'react';
import DayCard from './DayCard'
import './theme.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

let gid=100;
function getUniqueId() {
	gid += 1;
	return gid;
}

class DayCards extends React.PureComponent {

	getDay = (weeklyBdays, i) => {
		const props = { items: weeklyBdays, day: daysOfWeek[i] };
		return (<DayCard key={`card.${getUniqueId()}`} {...props} />);
	};

	getDays = () => {
		const { allBirthDays } = this.props;
		return allBirthDays.map(this.getDay);
	}

	render() {
		
		return (
			<div className="container">
				{this.getDays()}
			</div>
		);
	}
}

export default DayCards;