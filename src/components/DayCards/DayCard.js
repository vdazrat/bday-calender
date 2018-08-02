import React from 'react';
import './theme.css';

let gid = 0;
function getUniqueId() {
	gid += 1;
	return gid;
}

const leastgreatestSquare = (x) => {
	const sq = Math.ceil(Math.sqrt(x));
	return Math.pow(sq, 2);
};

function *colorGenerator() {
	const colors = ['#444358', '#aaec08', '#ec59da', '#0b24d4', '#e26b92', '#0ba5ff', '#de85a2'];
	let i = 0;
	while (true) {
		i = (i + 1) % colors.length;
		yield colors[i];
	}
}

const colorGen = colorGenerator();

class DayCard extends React.PureComponent {

	getMaxItems(items) {
		if (items.length >= 36) {
			const remaining = items.length - 36;
			return [...items.slice(0, 35), `+${remaining}`]
		}
		return items;
	}

	getItems = () => {
		const { items } = this.props;
		if (!items || !items.length) return <div className="noData" key={getUniqueId()}>So Sad, Much Empty</div>;

		const maxItems = this.getMaxItems(items);
		const closestSquare = Math.sqrt(leastgreatestSquare(maxItems.length));
		const size = 100 / closestSquare;
		const sizeStyle = {
			height: `${size}%`,
			width: `${size}%`,
		};
		return maxItems.map(item => {
			const style = { ...sizeStyle, backgroundColor: colorGen.next().value }
			return (
				<div className="square" style={style} key={getUniqueId()}>
					{item}
				</div>);
		});
	};

	render () {
		const { day } = this.props;
		return (
			<div className="card">
				<div className="header">
					{day}
				</div>
				<div className="body">
					{this.getItems()}
				</div>
			</div>
		);
	}
}

export default DayCard;