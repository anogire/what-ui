function quipuCalc(str) {
  const mathExpr = str.replace(/[^\+|\-|\*|\|\(|\)/]+/g, str => decryptQuipu(str));
  const calcMathExpr = eval(mathExpr).toString();

  return encryptQuipu(calcMathExpr);
}

function decryptQuipu(str) {
  const decrypt = str.replace(/~{2,}/g, str => `~${'0'.repeat(str.length - 1)}`)
    .replace(/@+/g, str => str.length)
    .replace(/~/g, '');

  return +decrypt;
}

function encryptQuipu(str) {
  const encrypt = str.replace(/\d/g, str => `${'@'.repeat(+str)}~`)
    .replace(/@~$/, '@');

  return encrypt;
}


console.log('\nTask #1. Quipu Calculator');

const task1_0 = '@~@@*@@';
const task1_1 = '@~@@+@@~~';
const task1_2 = '@~~~~@+@~@@';
const task1_3 = '@~~-@@';
const task1_4 = '@~~*@@/@@@@-@@';
const task1_5 = '(@~@@+@~@@@)*@~~~~';

console.log(`${task1_0}   (12 * 2 = 24)   ${quipuCalc(task1_0)}`);
console.log(`${task1_1}   (12 + 20 = 32)   ${quipuCalc(task1_1)}`);
console.log(`${task1_2}   (10001 + 12 = 10013)   ${quipuCalc(task1_2)}`);
console.log(`${task1_3}   (10 - 2 = 8 )   ${quipuCalc(task1_3)}`);
console.log(`${task1_4}   (10 * 2 / 4 - 2 = 3)    ${quipuCalc(task1_4)}`);
console.log(`${task1_5}   ((12 + 13) * 1000 = 25000)    ${quipuCalc(task1_5)}`);