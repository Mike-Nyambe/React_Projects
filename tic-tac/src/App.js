import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row try">
        <Square value={squares[0]} onClickSquare={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );

  function Square({ value, onClickSquare }) {
    return (
      <button className="square" onClick={onClickSquare}>
        {value}
      </button>
    );
  }
}
