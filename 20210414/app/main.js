const TICKET_LENGTH = 6;
const PAINT_CAN_MAX = 16;

// Task 1
function getPaintCan() {
  const inputValues = prompt('Task #1: Enter L, W, H through ","', '');
  if (!inputValues) {
    return 'Wrong input';
  }

  const totalValues = inputValues.split(',');
  if (!checkNumbers(totalValues, 0, 1000)) {
    return 'Wrong input';
  }

  const [wallLength, wallWidth, wallHeight] = totalValues;
  const wallSquare = (+wallLength + +wallWidth) * 2 * wallHeight;
  const result = Math.ceil(wallSquare / PAINT_CAN_MAX);

  return result;
}

// Task 2
function getAmount() {
  const inputValues = prompt('Task #2: Enter 6 numbers through ","', '');
  if (!inputValues) {
    return 'Wrong input';
  }

  const totalValues = inputValues.split(',');
  if (totalValues.length !== 6 || !checkNumbers(totalValues, 0, 100)) {
    return 'Wrong input';
  }

  const priceValues = totalValues.slice(0, 3).sort((a, b) => a - b);
  const weightValues = totalValues.slice(3, 6).sort((a, b) => a - b);
  const result = priceValues.reduce(
    (sum, item, index) =>
      sum += item * weightValues[index],
    0);

  return result;
}

// Task 3
function checkHappyTicket() {
  const ticket = prompt('Task #3: Enter a 6-digit number', '');
  const regexp = new RegExp(`^(\\d){1,${TICKET_LENGTH}}$`);
  if (!regexp.test(ticket)) {
    return 'Wrong input';
  }

  const ticketLength = ticket.length;
  if (!!(ticketLength % 2)) {
    return 'NO';
  }

  let sum = 0;
  for (let i = 0; i < ticketLength / 2; i++) {
    sum += ticket[i] - ticket[ticketLength - 1 - i];
  }

  return (!!sum) ? 'NO' : 'YES';
}

// Additional for task1 and task2
function checkNumbers(arr, from, to) {
  return arr.every(item => (item > from && item <= to));
}


const resultTask1 = getPaintCan();
console.log('Task #1: ', resultTask1);

const resultTask2 = getAmount();
console.log('Task #2: ', resultTask2);

const resultTask3 = checkHappyTicket();
console.log('Task #3: ', resultTask3);