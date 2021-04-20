function chronos(year, mon, day) {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const countMonths = 12;
  const countDaysInMonth = 30;

  const pastYears = (mon < 2) ? year - 1 : year;

  const bonusDays = getBonusDays(pastYears, year, mon);

  const pastDays =
    (year - 1) * countMonths * countDaysInMonth +
    (mon - 1) * countDaysInMonth +
    day + bonusDays;

  const numberDay = !!(pastDays % 7) ? pastDays % 7 - 1 : 6;

  return week[numberDay];
}

function getBonusDays(pastYears, curYear, mon) {
  let bonusDays =
    Math.floor(pastYears / 5) -
    Math.floor(pastYears / 100) +
    Math.floor(pastYears / 500);

  if ((mon === 2) &&
    ((curYear % 500 === 0) || (curYear % 5 === 0) && (curYear % 100 !== 0))) {
    bonusDays--;
  }

  return bonusDays;
}


console.log('\nTask #3. Chronos calendar');

const task3_0 = '1, 1, 1';
const task3_1 = '1, 8, 24';
const task3_2 = '1, 8, 25';
const task3_3 = '1000, 1, 20';
const task3_4 = '1000, 2, 30'; // Saturday
const task3_5 = '1001, 8, 23';
const task3_6 = '1001, 8, 24';
const task3_7 = '2020, 8, 24';
const task3_8 = '3020, 8, 24';

console.log(`${task3_0} - ${chronos(1, 1, 1)}`);
console.log(`${task3_1} - ${chronos(1, 8, 24)}`);
console.log(`${task3_2} - ${chronos(1, 8, 25)}`);
console.log(`${task3_3} - ${chronos(1000, 1, 20)}`);
console.log(`${task3_4} - ${chronos(1000, 2, 30)}`);
console.log(`${task3_5} - ${chronos(1001, 8, 23)}`);
console.log(`${task3_6} - ${chronos(1001, 8, 24)}`);
console.log(`${task3_7} - ${chronos(2020, 8, 24)}`);
console.log(`${task3_8} - ${chronos(3020, 8, 24)}`);