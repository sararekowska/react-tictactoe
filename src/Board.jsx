import { useState } from "react";

const insert = (board, x1, y1, value) =>
  board.map((row, x2) => row.map((item, y2) => (x1 == x2 && y1 == y2 ? value : item)));

const Board = () => {
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
  ]);
  const [count, setCount] = useState(0);
  const handleClick = (x, y) => {
    setCount(count + 1);
    const element = count % 2 == 0 ? "x" : "o";
    setBoard(insert(board, x, y, element));
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
