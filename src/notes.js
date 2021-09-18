const main = () => {
  [1, 2, 3, 4].reduce((a, b) => a + b, 0); // => 0 + 1 + 2 + 3 + 4
  [1, 2, 3, 4].reduce((a, b) => a.append(b), []); // => [1, 2, 3, 4]
  [true, true, false, true].reduce((a, b) => a && b, true);
  [1, 2, 3, 4].filter((a) => a > 2); // => [3,4]
};

const myBoard = [
  ["x", "o", "o"],
  ["o", "o", "o"],
  ["o", "o", "_"]
];

const columnIndex = (board) =>
  board[0].map((current, index) =>
    board.reduce((acc, b) => (acc === b[index] ? b[index] : false), board[0][index])
  );

const checkRow = (row) => row.reduce((a, b) => (a === b ? b : false));
