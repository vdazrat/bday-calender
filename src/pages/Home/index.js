import React from 'react';
import { inject, observer } from 'mobx-react';
import DayCards from '../../components/DayCards';
import UserInput from '../../components/UserInput';
import './theme.css';

@inject(({store}) => {
	console.log(store === window.store);
  return { data: store.allBirthdays, setYear: store.setYear.bind(store), setData: store.setData.bind(store) };
})
@observer
class Home extends React.PureComponent {

	getTitle = () => {
		return <div className="title">Birthday Cal</div>;
	};

	render() {
		const { data, setData, setYear } = this.props;
		return (
			<div className="home">
				{this.getTitle()}
        		<DayCards allBirthDays={data} />
        		<UserInput setYear={setYear} setData={setData} />
      		</div>
  		);
	}

}

export default Home;