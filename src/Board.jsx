import { useState } from "react";
import { Paper, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";

const checkWin = (board, count) => {
  const checkRow = (row) =>
    row.reduce((a, b) => (a === b && a !== "_" ? a : false));

  const columnsChecked = board[0].map((current, index) =>
    board.reduce(
      (acc, b) => (acc === b[index] && b[index] !== "_" ? b[index] : false),
      board[0][index]
    )
  );

  const element = count % 2 === 0 ? "o" : "x";

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== "_"
  ) {
    return element;
  } else if (
    board[2][0] === board[1][1] &&
    board[2][0] === board[0][2] &&
    board[2][0] !== "_"
  ) {
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
    ["_", "_", "_"],
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
    <Paper>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          backgroundColor="#FFB6C1"
          paddingTop={6}
          paddingBottom={4}
        >
          {board.map((row, x) => (
            <Box>
              {row.map((item, y) => (
                <Paper onClick={() => handleClick(x, y)}>
                  <Box
                    width={100}
                    height={100}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid grey"
                  >
                    {
                      {
                        o: (
                          <CircleOutlinedIcon
                            fontSize="large"
                            htmlColor="#FFB6C1"
                          />
                        ),
                        x: <CloseIcon fontSize="large" htmlColor="#FFB6C1" />,
                        _: "",
                      }[item]
                    }
                  </Box>
                </Paper>
              ))}
            </Box>
          ))}
        </Box>
      </div>
      <Box display="flex" justifyContent="center" backgroundColor="#FFB6C1">
        {win !== false ? <h2>Winner: {win}</h2> : " "}
      </Box>
    </Paper>
  );
};

export default Board;
