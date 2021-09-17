import { useState } from "react";

const insert = (board, x1, y1, value, setCount) =>
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

const Board = () => {
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);
  const [count, setCount] = useState(0);
  const handleClick = (x, y) => {
    const element = count % 2 === 0 ? "x" : "o";
    setBoard(insert(board, x, y, element, setCount));
  };
  return (
    <table>
      {board.map((row, x) => (
        <tr>
          {row.map((item, y) => (
            <td onClick={() => handleClick(x, y)}>{item}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Board;
