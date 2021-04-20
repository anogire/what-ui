function getOrderWords(str) {
  const orderWords = str.trim().split(/\s+/g);
  const regexp = /[1-9]/;

  orderWords.sort((a, b) => {
    return a.match(regexp) - b.match(regexp);
  });

  return orderWords.join(' ');
}


console.log('\nTask #1. Your order, please');

const task1_0 = 'is2 Th4is T3est 1a';
const task1_1 = '';
const task1_2 = '4of Fo1r pe6ople g3ood th5e the2';

console.log(`${task1_0} - ${getOrderWords(task1_0)}`);
console.log(`${task1_1} - ${getOrderWords(task1_1)}`);
console.log(`${task1_2} - ${getOrderWords(task1_2)}`);