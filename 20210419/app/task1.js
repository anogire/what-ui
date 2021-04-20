function ipsBetween(ip1, ip2) {
  return getIpNumber(ip2) - getIpNumber(ip1);
}

function getIpNumber(ip) {
  const IP_BASE = 4;

  const ipArr = ip.split('.');
  const ipNumber = ipArr.reduce(
    (sum, cur, i) => sum += cur * 256 ** (IP_BASE - i - 1),
    0);

  return ipNumber;
}


console.log('\nTask #1. Count IP Addresses');

const task1_01 = '10.0.0.0';
const task1_02 = '10.0.0.50';

const task1_11 = '10.0.0.0';
const task1_12 = '10.0.1.0';

const task1_21 = '20.0.0.10';
const task1_22 = '20.0.1.0';

console.log(`${task1_01}, ${task1_02} - ${ipsBetween(task1_01, task1_02)}`);
console.log(`${task1_11}, ${task1_12} - ${ipsBetween(task1_11, task1_12)}`);
console.log(`${task1_21}, ${task1_22} - ${ipsBetween(task1_21, task1_22)}`);