function getTickets(queue) {
  let [banknote25, banknote50] = [0, 0];
  const isSoldAll = queue.every(item => {
    switch (item) {
      case 25:
        banknote25++;
        break;
      case 50:
        banknote25--;
        banknote50++;
        break;
      case 100:
        banknote25--;
        (banknote50 > 0) ? banknote50-- : banknote25 -= 2;
    }
    return (banknote25 < 0 || banknote50 < 0) ? false : true;
  })

  return isSoldAll ? 'YES' : 'NO';
}


console.log('\nTask #3. Vasya - Clerk');

const task3_0 = [25, 25, 50];
const task3_1 = [25, 100];
const task3_2 = [25, 25, 50, 50, 100];
const task3_3 = [25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100];

console.log(`${task3_0} - ${getTickets(task3_0)}`);
console.log(`${task3_1} - ${getTickets(task3_1)}`);
console.log(`${task3_2} - ${getTickets(task3_2)}`);
console.log(`${task3_3} - ${getTickets(task3_3)}`);