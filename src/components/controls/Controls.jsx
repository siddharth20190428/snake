import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHead, setSnake } from "../../actions";
import "./controls.css";

const Controls = () => {
  let head = useSelector((state) => state.head);
  const dispatch = useDispatch();

  const handleCont = (x, y) => {
    dispatch(setSnake([y, x]));
    dispatch(setHead({ y, x }));
  };

  const dirs = {
    up: [head.x, head.y - 1],
    down: [head.x, head.y + 1],
    left: [head.x - 1, head.y],
    right: [head.x + 1, head.y],
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
        <div className="cont up" onClick={() => handleCont(...dirs.up)}>
          &#8593;
        </div>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="cont left" onClick={() => handleCont(...dirs.left)}>
          &#8592;
        </div>
        <div className="cont down" onClick={() => handleCont(...dirs.down)}>
          &#8595;
        </div>
        <div className="cont right" onClick={() => handleCont(...dirs.right)}>
          &#8594;
        </div>
      </div>
    </div>
  );
};

export default Controls;
