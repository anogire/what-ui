// Найти все комбинации с максимальным произведением
function findPartMaxProduct(num) {
  const partitions = getCombinations(num); // разбиение на слагаемые
  const { partsWithProduct, maxProduct } = getMaxProduct(partitions); // слагаемые с произведениями и max из произведений

  const partMaxProd = partsWithProduct.filter(item => item[0] === maxProduct)
    .map(item => item[1])
    .reverse(); // итоговые комбинации слагаемых с max произведением по убыванию
  partMaxProd.push(maxProduct);

  return partMaxProd;
}

//Рекурсивное разбиение числа на слагаемые без повторений
function getCombinations(num, enough = num) {
  let item = [];
  for (let i = 1; i <= Math.min(num, enough); i++) {
    let prevItem = getCombinations(num - i, i);
    if (prevItem.length !== 0) {
      prevItem.forEach(el => item.push([i, el].flat(num)));
    } else {
      item.push([i]);
    }
  }
  return item;
}

// Подсчет произведения для каждой комбинации слагаемых
function getMaxProduct(partitions) {
  let maxProduct = 0;
  const partsWithProduct = partitions.map(el => {
    let curProduct = el.reduce((multi, cur) => multi * cur, 1);
    if (curProduct > maxProduct) {
      maxProduct = curProduct;
    }
    return [curProduct, el];
  })

  return { partsWithProduct, maxProduct };
}


console.log('\nTask #2. Find the Partition with Maximum Product Value');

console.log('n = 4 - ', findPartMaxProduct(4));
console.log('n = 5 - ', findPartMaxProduct(5));
console.log('n = 8 - ', findPartMaxProduct(8));
console.log('n = 10 - ', findPartMaxProduct(10));


// Более навороченный вариант, но с мутацией глобальных переменных и входящих параметров
// const partitions = [];
// let maxProduct = 0;

// function findPartMaxProduct(num) {
//   getCombinations(num);
//   const partMaxProd = partitions.filter(item => item[0] === maxProduct)
//     .map(item => item[1])
//     .reverse();
//   partMaxProd.push(maxProduct);

//   return partMaxProd;
// }

// function getCombinations(num, enough = num, s = '', multi = 1) {
//   if (num == 0) {
//     if (multi > maxProduct) {
//       maxProduct = multi;
//     }
//     const part = [multi, Array.from(s).map(Number)];
//     partitions.push(part);
//   }
//   for (let i = 1; i <= Math.min(enough, num); i++) {
//     getCombinations(num - i, i, s + i, multi * i);
//   }

//   return partitions;
// }