import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHead, setSnake } from "../../actions";

import "./snakeBoard.css";

const SnakeBoard = () => {
  let board = useSelector((state) => state.board);
  let snake = useSelector((state) => state.snake);
  const dispatch = useDispatch();

  useEffect(() => {
    snake.forEach((cord) => {
      dispatch(setSnake(cord));
    });
  }, [snake]);

  return (
    <div className="board">
      {board.map((row, row_index) => (
        <div key={row_index} className="row">
          {row.map((cell, cell_index) => (
            <div
              key={cell_index}
              className={`cell ${
                cell === 1 ? "snake" : cell === 2 ? "food" : ""
              }`}
            >
              {row_index}
              {cell_index}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
