import { useState } from "react";

const checkWin = (board, count) => {
  const checkRow = (row) => row.reduce((a, b) => (a === b && a !== "_" ? a : false));

  const columnsChecked = board[0].map((current, index) =>
    board.reduce(
      (acc, b) => (acc === b[index] && b[index] !== "_" ? b[index] : false),
      board[0][index]
    )
  );

  const element = count % 2 === 0 ? "o" : "x";

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "_") {
    return element;
  } else if (board[2][0] === board[1][1] && board[2][0] === board[0][2] && board[2][0] !== "_") {
    return element;
  } else if (board.filter(checkRow).length !== 0) {
    return element;
  } else if (columnsChecked.filter((a) => a).length !== 0) {
    return element;
  } else {
    return false;
  }
};

const Board = () => {
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ]);
  const [count, setCount] = useState(0);
  const win = checkWin(board, count);

  const insert = (x1, y1, value) =>
    board.map((row, x2) =>
      row.map((item, y2) => {
        if (x1 === x2 && y1 === y2 && item === "_") {
          setCount((prev) => prev + 1);
          return value;
        } else {
          return item;
        }
      })
    );

  const handleClick = (x, y) => {
    const element = count % 2 === 0 ? "x" : "o";
    setBoard(insert(x, y, element));
  };

  return (
    <div>
      <table>
        {board.map((row, x) => (
          <tr>
            {row.map((item, y) => (
              <td onClick={() => handleClick(x, y)}>{item}</td>
            ))}
          </tr>
        ))}
      </table>
      {win !== false ? <h2>wygral {win}</h2> : " "}
    </div>
  );
};

export default Board;
