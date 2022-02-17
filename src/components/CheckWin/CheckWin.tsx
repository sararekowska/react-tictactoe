const CheckWin = (board: string[][], count: number) => {
  const checkRow = (row: any[]) =>
    row.reduce((a: string, b: any) => (a === b && a !== "_" ? a : false));

  const columnsChecked = board[0].map((current: any, index: number) =>
    board.reduce(
      (acc: any, b: { [x: string]: any }) =>
        acc === b[index] && b[index] !== "_" ? b[index] : false,
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
  } else if (columnsChecked.filter((a: any) => a).length !== 0) {
    return element;
  } else {
    return false;
  }
};

export default CheckWin;
