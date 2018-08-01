const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class Day {
    constructor(dayOfWeek, data) {
        this.value = days.indexOf(dayOfWeek);
        this.year = null;
        this.data = data;
    }

    get birthdays() {
        if (this.year === null) return null;
        // filter those names where year
        const bdays = this.data.filter(({ birthday }) => {
            const date = new Date(birthday);
            console.log(date.getFullYear(), this.year);
            return (
                (date.getFullYear() === this.year)
                    &&
                (date.getDay() === this.value)
            );
        });
        if (!bdays.length) return null;
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

export default Day;