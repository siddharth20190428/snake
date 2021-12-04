import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCord,
  removeCord,
  setBoardFood,
  setFood,
  setHead,
  setInit,
} from "../../actions";
import { getRandom } from "../../reducers/foodReducer";
import "./controls.css";

const Controls = () => {
  let snake = useSelector((state) => state.snake);
  let head = useSelector((state) => state.head);
  let food = useSelector((state) => state.food);
  const dispatch = useDispatch();

  const tail = snake[0];

  const handleCont = (cord) => {
    const [y, x] = cord;

    if (y < 0 || y > 9 || x < 0 || x > 9) {
      // handle game over
      // console.log("0");
      return;
    }
    dispatch(addCord(cord));
    dispatch(setHead({ y, x }));

    if (JSON.stringify(head) === JSON.stringify(food)) {
      let newFood = { y: getRandom(), x: getRandom() };
      dispatch(setFood(newFood));
      return;
    }
    dispatch(removeCord(cord));
    dispatch(setInit(tail));
  };

  useEffect(() => {
    dispatch(setBoardFood(food));
  }, [food]);

  const dirs = {
    up: [head.y - 1, head.x],
    down: [head.y + 1, head.x],
    left: [head.y, head.x - 1],
    right: [head.y, head.x + 1],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <div className="cont" onClick={() => handleCont(dirs.up)}>
          &#8593;
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="cont" onClick={() => handleCont(dirs.left)}>
          &#8592;
        </div>
        <div className="cont" onClick={() => handleCont(dirs.down)}>
          &#8595;
        </div>
        <div className="cont" onClick={() => handleCont(dirs.right)}>
          &#8594;
        </div>
      </div>
    </div>
  );
};

export default Controls;
