function getSumMin(arr) {
  const sumMin = arr.reduce(
    (sum, item) => sum += Math.min(...item),
    0);
  return sumMin;
}


function getTwoOldestAges(arr) {
  const twoMax = arr.sort((a, b) => a - b).slice(-2);
  return twoMax;
}


function getShortestWord(str) {
  const arr = str.trim().split(/\s+/g);
  const shortWord = arr.reduce(
    (prev, cur) =>
      cur.length < prev.length ? cur : prev,
    arr[0]);
  return shortWord.length;
}


const task1_0 = [[1, 2, 3], [33, 22, 55], [16, 42, 345, 79, 1]];
const task1_1 = [[11, 2], [323, 2, 55]];
const task1_2 = [[13, 11, 2], [3, 23, 23, 55], [23, 55, 3, 77], [39, 7, 89, 94]];

console.log('\nTask #1. Sum of Minimums');
console.log(task1_0, 'sum of min: ', getSumMin(task1_0));
console.log(task1_1, 'sum of min: ', getSumMin(task1_1));
console.log(task1_2, 'sum of min: ', getSumMin(task1_2));


const task2_0 = [1, 2, 10, 8];
const task2_1 = [1, 2];
const task2_2 = [2, 15, 3, 1, 14];

console.log('\nTask #2. Two Oldest Ages');
console.log(task2_0, 'two oldest ages: ', getTwoOldestAges(task2_0));
console.log(task2_1, 'two oldest ages: ', getTwoOldestAges(task2_1));
console.log(task2_2, 'two oldest ages: ', getTwoOldestAges(task2_2));


const task3_0 = ' bitcoin take over the world maybe who knows perhaps ';
const task3_1 = 'turns out random test cases are easier than writing out basic ones';
const task3_2 = 'lets talk about javascript the best language';
const task3_3 = '   i want to travel the world writing code one day     ';
const task3_4 = '   3   444 55  2222    534   0';

console.log('\nTask #3. The Shortest Word');
console.log(`${task3_0} - ${getShortestWord(task3_0)}`);
console.log(`${task3_1} - ${getShortestWord(task3_1)}`);
console.log(`${task3_2} - ${getShortestWord(task3_2)}`);
console.log(`${task3_3} - ${getShortestWord(task3_3)}`);
console.log(`${task3_4} - ${getShortestWord(task3_4)}`);