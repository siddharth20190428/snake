import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHead, setSnake } from "../../actions";
// import { dirs, handleCont } from "../controls/Controls";

import "./snakeBoard.css";

const SnakeBoard = () => {
  let board = useSelector((state) => state.board);
  let head = useSelector((state) => state.head);
  const dispatch = useDispatch();

  const handleCont = (x, y) => {
    dispatch(setSnake([y, x]));
    dispatch(setHead({ y, x }));
  };

  const handleKeyDown = (e) => {
    const dirs = {
      up: [head.x, head.y - 1],
      down: [head.x, head.y + 1],
      left: [head.x - 1, head.y],
      right: [head.x + 1, head.y],
    };
    console.table(dirs);
    switch (e.key) {
      case "ArrowRight":
        handleCont(...dirs.right);
        break;
      case "ArrowLeft":
        handleCont(...dirs.left);
        break;
      case "ArrowUp":
        handleCont(...dirs.up);
        break;
      case "ArrowDown":
        handleCont(...dirs.down);
        break;
      default:
        break;
    }
    console.log(head);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyDown(e));
    return () => {
      window.removeEventListener("keydown", (e) => handleKeyDown(e));
    };
  });

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
              // onClick={() => {
              //   dispatch(setSnake([row_index, cell_index]));
              // }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
