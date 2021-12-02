import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCord, setHead } from "../../actions";

import "./snakeBoard.css";

const SnakeBoard = () => {
  let [board, setBoard] = useState([]);
  const snake = useSelector((state) => state.snake);
  const dispatch = useDispatch();

  // board config
  const Board_size = 10;
  // const foodCord = [];

  useEffect(() => {
    setBoard(
      new Array(Board_size).fill(0).map((_) => new Array(Board_size).fill(0))
    );
  }, [setBoard, snake]);

  // let board = new Array(Board_size)
  //   .fill(0)
  //   .map((_) => new Array(Board_size).fill(0));

  snake.cords.forEach((cord) => {
    console.log(cord);
    if (board) {
      board[cord[0]][cord[1]] = 1;
    } else {
      console.log("waiting");
    }
  });

  const handleKeyDown = (e) => {
    // console.log(snake.cords);
    let head = snake.cords[snake.cords.length - 1];
    let cord = [head[0] + snake.dy, head[1] + snake.dx];
    console.log("vinit", head, cord);
    switch (e.key) {
      case "ArrowRight":
        dispatch(addCord(cord));

        // dispatch(setHead([nHead[0], nHead[1] + 1]));
        // dispatch(newHead([head[0], head[1] + 1]));
        // console.log(snake);
        break;
      case "ArrowLeft":
        // dispatch(setHead([head[0], head[1] - 1]));
        // dispatch(newHead([head[0], head[1] - 1]));
        break;
      case "ArrowUp":
        // dispatch(setHead([head[0] - 1, head[1]]));
        // dispatch(newHead([head[0] - 1, head[1]]));
        break;
      case "ArrowDown":
        // dispatch(setHead([head[0] + 1, head[1]]));
        // dispatch(newHead([head[0] + 1, head[1]]));
        break;
      default:
        break;
    }
  };
  function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while (new Date().getTime() < unixtime_ms + ms) {}
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
  }, []);

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
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
