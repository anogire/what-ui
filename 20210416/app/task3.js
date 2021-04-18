function getChair(arr, num) {
  if (num < 1) {
    return 'Game On';
  }

  const result = [];
  let needChairs = num;

  arr.some((item) => {
    const [busy, totalChairs] = item;
    const busyChairs = busy.length;

    if (totalChairs > busyChairs) {
      result.push(totalChairs - busyChairs);
      needChairs -= totalChairs - busyChairs;
    } else {
      result.push(0);
    }

    return !needChairs;
  });

  return (!!needChairs) ? 'Not enough!' : result;
}


console.log('\nTask #3. Find a Chair');

const task3_0 = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const task3_0Num = 4;
const task3_1 = [['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]];
const task3_1Num = 5;
const task3_2 = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]];
const task3_2Num = 0;
const task3_3 = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]];
const task3_3Num = 4;

console.log(task3_0, task3_0Num, getChair(task3_0, task3_0Num));
console.log(task3_1, task3_1Num, getChair(task3_1, task3_1Num));
console.log(task3_2, task3_2Num, getChair(task3_2, task3_2Num));
console.log(task3_3, task3_3Num, getChair(task3_3, task3_3Num));