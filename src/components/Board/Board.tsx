import { useState } from "react";
import { Paper, Box } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CheckWin from "../CheckWin/CheckWin";
import styles from "./Board.module.scss";

const Board = () => {
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);
  const [count, setCount] = useState(0);
  const win = CheckWin(board, count);

  const insert = (x1: any, y1: any, value: string) =>
    board.map((row: any[], x2: any) =>
      row.map((item: string, y2: any) => {
        if (x1 === x2 && y1 === y2 && item === "_") {
          setCount((prev: number) => prev + 1);
          return value;
        } else {
          return item;
        }
      })
    );

  const handleClick = (x: any, y: any) => {
    const element = count % 2 === 0 ? "x" : "o";
    setBoard(insert(x, y, element));
  };

  return (
    <Paper>
      <div>
        <Box className={styles["board"]}>
          {board.map((row: any[], x: any) => (
            <Box>
              {row.map((item: string | number, y: any) => (
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
      <Box className={styles["winner"]}>
        {win !== false ? <h2>Winner: {win}</h2> : " "}
      </Box>
    </Paper>
  );
};

export default Board;
