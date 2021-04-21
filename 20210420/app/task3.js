function getTickets(queue) {
  let sumClerk = 0;
  const ticketPrice = 25;
  const isSoldAll = queue.every(item =>
    (item - ticketPrice > sumClerk) ? false : !!(sumClerk -= item - 2 * ticketPrice));

  return isSoldAll ? 'YES' : 'NO';
}


console.log('\nTask #3. Vasya - Clerk');

const task3_0 = [25, 25, 50];
const task3_1 = [25, 100];
const task3_2 = [25, 25, 50, 50, 100];

console.log(`${task3_0} - ${getTickets(task3_0)}`);
console.log(`${task3_1} - ${getTickets(task3_1)}`);
console.log(`${task3_2} - ${getTickets(task3_2)}`);