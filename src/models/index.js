const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Day {
    constructor(dayOfWeek, data, year) {
        this.value = days.indexOf(dayOfWeek);
        this.data = data;
        this.year = year;
    }

    get birthdays() {
        if (this.year === null) return null;

        // filter the data by year and this day
        const bdays = this.data.filter(({ birthday }) => {
            const date = new Date(birthday);
            return (
                (date.getFullYear() === this.year)
                    &&
                (date.getDay() === this.value)
            );
        });

        // return the initials
        if (!bdays.length) return [];
        return bdays.map(this.getInitials);
    }

    getInitials = ({ name }) => {
        const [first, last] = name.split(' ');
        return `${first[0]}${last ? last[0] : ''}`;
    };

    setYear(year) {
        this.year = year;
    }
}

// creates a factory method for creating Day objects, with data and year curried
const createFactory = (data, year) => {
    return (day) => new Day(day, data, year);
};

export default createFactory;