import React, { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setHead, setSnake } from "../../actions";

import "./snakeBoard.css";

const SnakeBoard = () => {
  const width = 10;
  const height = 10;
  let initialRows = [];
  for (let i = 0; i < height; i++) {
    initialRows.push([]);
    for (let k = 0; k < width; k++) {
      initialRows[i].push("blank");
    }
  }

  const randomPosition = () => {
    const position = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    return position;
  };

  const [rows, setRows] = useState(initialRows);

  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ]);
  const [direction, setDirection] = useState("right");
  const [food, setFood] = useState(randomPosition);

  const changeDirectionWithKeys = (e) => {
    var { keyCode } = e;
    switch (keyCode) {
      case 37:
        setDirection("left");
        break;
      case 38:
        setDirection("top");
        break;
      case 39:
        setDirection("right");
        break;
      case 40:
        setDirection("bottom");
        break;
      default:
        break;
    }
  };

  const displaySnake = () => {
    const newRows = initialRows;
    snake.forEach((cell) => {
      newRows[cell.x][cell.y] = "snake";
    });
    newRows[food.x][food.y] = "food";
    setRows(newRows);
  };

  const moveSnake = () => {
    const newSnake = [];
    switch (direction) {
      case "right":
        newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % width });
        break;
      case "left":
        newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + width) % width });
        break;
      case "top":
        newSnake.push({ x: (snake[0].x - 1 + height) % height, y: snake[0].y });
        break;
      case "bottom":
        newSnake.push({ x: (snake[0].x + 1) % height, y: snake[0].y });
    }
    snake.forEach((cell) => {
      newSnake.push(cell);
    });
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood(randomPosition);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
    displaySnake();
  };

  useInterval(moveSnake, 500);

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  //   //   display
  //   const displayRows = rows.map((row) => (
  //     <li>
  //       {row.map((e) => {
  //         switch (e) {
  //           case "blank":
  //             return <img src={Blank} />;
  //           case "snake":
  //             return <img style={{ opacity: "0" }} src={Snake} />;
  //           case "food":
  //             return <img src={Food} />;
  //         }
  //       })}
  //     </li>
  //   ));

  //   return (
  //     <div>
  //       <ul style={{ width: "500px", padding: "0px" }} class="img500">
  //         {displayRows}
  //       </ul>
  //     </div>
  //   );
  // };

  // const SnakeBoard = () => {
  //   const width = 10;
  //   const height = 10;
  //   const mat = new Array(10).fill(0).map((_) => new Array(10).fill(0));

  //   const randomPosition = () => {
  //     const position = {
  //       x: Math.floor(Math.random() * width),
  //       y: Math.floor(Math.random() * height),
  //     };
  //     return position;
  //   };

  //   const [board, setBoard] = useState(mat);
  //   const [snake, setSnake] = useState([
  //     { x: 0, y: 0 },
  //     { x: 1, y: 0 },
  //   ]);
  //   const [direction, setDirection] = useState("right");
  //   const [food, setFood] = useState(randomPosition);

  //   const changeDirectionWithKeys = (e) => {
  //     var { keyCode } = e;
  //     switch (keyCode) {
  //       case 37:
  //         setDirection("left");
  //         break;
  //       case 38:
  //         setDirection("top");
  //         break;
  //       case 39:
  //         setDirection("right");
  //         break;
  //       case 40:
  //         setDirection("bottom");
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  //   document.addEventListener("keydown", changeDirectionWithKeys, false);

  //   const displaySnake = () => {
  //     const newBoard = board;
  //     snake.forEach((cell) => {
  //       newBoard[cell.x][cell.y] = "snake";
  //     });
  //     newBoard[food.x][food.y] = "food";
  //     setBoard(newBoard);
  //   };

  //   const moveSnake = () => {
  //     const newSnake = [];
  //     switch (direction) {
  //       case "right":
  //         newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % width });
  //         break;
  //       case "left":
  //         newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + width) % width });
  //         break;
  //       case "top":
  //         newSnake.push({ x: (snake[0].x - 1 + height) % height, y: snake[0].y });
  //         break;
  //       case "bottom":
  //         newSnake.push({ x: (snake[0].x + 1) % height, y: snake[0].y });
  //     }
  //     snake.forEach((cell) => {
  //       newSnake.push(cell);
  //     });
  //     if (snake[0].x === food.x && snake[0].y === food.y) {
  //       setFood(randomPosition);
  //     } else {
  //       newSnake.pop();
  //     }
  //     setSnake(newSnake);
  //     displaySnake();
  //   };

  //   useInterval(moveSnake, 100);

  //   function useInterval(callback, delay) {
  //     const savedCallback = useRef();

  //     // Remember the latest callback.
  //     useEffect(() => {
  //       savedCallback.current = callback;
  //     }, [callback]);

  //     // Set up the interval.
  //     useEffect(() => {
  //       function tick() {
  //         savedCallback.current();
  //       }
  //       if (delay !== null) {
  //         let id = setInterval(tick, delay);
  //         return () => clearInterval(id);
  //       }
  //     }, [delay]);
  //   }

  return (
    <div className="board">
      {rows.map((row, row_index) => (
        <div key={row_index} className="row">
          {row.map((cell, cell_index) => (
            <div key={cell_index} className={`cell ${cell}`}>
              {/* {row_index}
              {cell_index} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default SnakeBoard;
