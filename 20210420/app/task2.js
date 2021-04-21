const partitions = [];
let maxProduct = 0;

function getPartMaxProduct(num) {
  getCombinations(num);
  const partMaxProd = partitions.filter(item => item[0] === maxProduct)
    .map(item => item[1])
    .reverse();
  partMaxProd.push(maxProduct);

  return partMaxProd;
}

function getCombinations(num, enough = num, s = '', multi = 1) {
  if (num == 0) {
    if (multi > maxProduct) {
      maxProduct = multi;
    }
    const part = [multi, Array.from(s).map(Number)];
    partitions.push(part);
  }
  for (let i = 1; i <= Math.min(enough, num); i++) {
    getCombinations(num - i, i, s + i, multi * i);
  }

  return partitions;
}


console.log('\nTask #2. Find the Partition with Maximum Product Value');

console.log('n = 4 - ', getPartMaxProduct(4));
console.log('n = 5 - ', getPartMaxProduct(5));
console.log('n = 8 - ', getPartMaxProduct(8));
console.log('n = 10 - ', getPartMaxProduct(10));