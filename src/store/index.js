import { observable, computed, action, autorun } from 'mobx';
import createFactory from '../models';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

class Store {
	@observable data = [[], [], [], [], [], [], []]
	@observable year = null

	constructor() {
        autorun(() => console.log('Store has been changed ', this.allBirthdays));
    }

	@computed get allBirthdays() {
		const dayFactory = createFactory(this.data, this.year);
		const days = daysOfWeek.map(dayFactory);
		return days.map(day => day.birthdays)
	}

	@action
	setData(data) {
		this.data = data;
	}

	@action
	setYear(year) {
		this.year = year;
	}
};

export default Store;