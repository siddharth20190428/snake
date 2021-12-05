import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBoardFood } from "../../actions";
import {
  handleUp,
  handleRight,
  handleDown,
  handleLeft,
  handleNewCord,
} from "../../utils";
import "./controls.css";

const Controls = () => {
  const snake = useSelector((state) => state.snake);
  const head = useSelector((state) => state.head);
  const food = useSelector((state) => state.food);
  const move = useSelector((state) => state.move);
  console.log(food);
  const dispatch = useDispatch();

  const tail = snake[0];

  // rendering food
  useEffect(() => {
    dispatch(setBoardFood(food));
  }, [food]);

  // setInterval(() => {
  //   dispatch(
  //     handleNewCord(
  //       [head[0] + move.dy, head[1] + move.dx],
  //       dispatch,
  //       head,
  //       tail,
  //       food
  //     )
  //   );
  // }, 500);

  return (
    <div className="cont-container">
      <div>
        <div
          className="cont"
          onClick={() => handleUp(dispatch, head, tail, food)}
        >
          &#8593;
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          className="cont"
          onClick={() => handleLeft(dispatch, head, tail, food)}
        >
          &#8592;
        </div>
        <div
          className="cont"
          onClick={() => handleDown(dispatch, head, tail, food)}
        >
          &#8595;
        </div>
        <div
          className="cont"
          onClick={() => handleRight(dispatch, head, tail, food)}
        >
          &#8594;
        </div>
      </div>
    </div>
  );
};

export default Controls;
