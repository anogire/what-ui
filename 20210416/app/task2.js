function checkTicTacToe(arr) {
  const diagonalOne = [];
  const diagonalTwo = [];
  const winVariants = [];
  let result;

  arr.forEach((item, i, arr) => {
    winVariants.push(checkWin(item));
    winVariants.push(checkWin([arr[0][i], arr[1][i], arr[2][i]]));
    diagonalOne.push(arr[i][i]);
    diagonalTwo.push(arr[i][2 - i]);
  });
  winVariants.push(checkWin(diagonalOne));
  winVariants.push(checkWin(diagonalTwo));

  switch (true) {
    case winVariants.includes(-1):
      result = "The board is not finished yet";
      break;
    case winVariants.includes(1):
      result = "X won";
      break;
    case winVariants.includes(2):
      result = "O won";
      break;
    default:
      result = "It's a cat's game";
      break;
  }

  return result;
}

// Check result for Task 2 "Tic-Tac-Toe winner"
function checkWin(arr) {
  let result;
  const sumWinner = arr.reduce(
    (sum, cur) => (!!cur) ? sum += cur : result = -1,
    0);

  if (result) {
    return result;
  }

  switch (sumWinner) {
    case 3:
      result = 1; break;
    case 6:
      result = 2; break;
    default:
      result = 0; break;
  }

  return result;
}


console.log('\nTask #2. Tic-Tac-Toe Checker');

const task2_0 = [
  [2, 2, 1],
  [1, 1, 2],
  [2, 2, 1]
];
const task2_1 = [
  [2, 0, 1],
  [1, 1, 2],
  [2, 2, 2]
];
const task2_2 = [
  [2, 1, 1],
  [1, 2, 2],
  [2, 1, 2]
];
const task2_3 = [
  [2, 1, 1],
  [1, 1, 2],
  [2, 1, 2]
];

console.log(task2_0, checkTicTacToe(task2_0));
console.log(task2_1, checkTicTacToe(task2_1));
console.log(task2_2, checkTicTacToe(task2_2));
console.log(task2_3, checkTicTacToe(task2_3));