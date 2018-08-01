import faker from 'faker';

function *generate(year) {

    while (true) {
        const randDate = faker.date.past();
        yield {
            name: faker.name.findName(),
            birthday: `${year}/${randDate.getMonth() + 1}/${randDate.getDate()}`,
        };
    }
}

function generateDates(N) {
    const gen = generate(1975);
    return Array(N).fill(0)
        .map(_ => gen.next().value)
}

export default { generateDates };