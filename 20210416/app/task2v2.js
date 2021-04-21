function checkTicTacToe(arr) {
  const board = arr.flat(2);
  const winnerPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let i = 0; i < winnerPos.length; i++) {
    const multi = winnerPos[i].reduce((multi, cur) => multi * board[cur], 1); // 0, 1, 4, 8
    if (multi === 1) return "X won";
    if (multi === 8) return "O won";
  }

  return board.includes(0) ? "The board is not finished yet" : "It's a cat's game";
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
  [1, 0, 2]
];
const task2_2 = [
  [2, 1, 1],
  [1, 2, 2],
  [0, 1, 2]
];
const task2_3 = [
  [2, 1, 1],
  [1, 0, 2],
  [2, 1, 2]
];

console.log(task2_0, checkTicTacToe(task2_0));
console.log(task2_1, checkTicTacToe(task2_1));
console.log(task2_2, checkTicTacToe(task2_2));
console.log(task2_3, checkTicTacToe(task2_3));