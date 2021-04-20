import { MORSE_CODE } from '../public/data.js';

function decoderMorse(str) {
  const codeMorse = str.trim().split(/\s{3}/);
  const result = codeMorse.map(
    item => getWord(item).join('').toUpperCase()
  );

  return result.join(' ');
}

function getWord(str) {
  return str.split(' ').map(item => MORSE_CODE[item] || ' ');
}


console.log('\nTask #2. Morse code decoder');

const task2_0 = '.... . -.--   .--- ..- -.. .'; //"HEY JUDE"
const task2_1 = '···−−−···'; //"SOS"
const task2_2 = ''; //''

console.log(task2_0, decoderMorse(task2_0));
console.log(task2_1, decoderMorse(task2_1));
console.log(task2_2, decoderMorse(task2_2));