// head
const setHead = (head) => {
  return { type: "SET__HEAD", payload: head };
};

// food
const setFood = (cord) => {
  return { type: "SET__FOOD", payload: cord };
};

// score
const incScore = () => {
  return { type: "INC__SCORE" };
};

// board
const setInit = (cord) => {
  return { type: "SET__INIT", payload: cord };
};
const setSnake = (cord) => {
  return { type: "SET__SNAKE", payload: cord };
};
const setBoardFood = (cord) => {
  return { type: "SET__BOARD__FOOD", payload: cord };
};
const resetBoard = () => {
  return { type: "RESET__BOARD" };
};

// snake
const addCord = (cord) => {
  return { type: "ADD__CORD", payload: cord };
};
const removeCord = () => {
  return { type: "REMOVE__CORD" };
};
const resetSnake = () => {
  return { type: "RESET__SNAKE" };
};

// move
const setMove = (move) => {
  return { type: "SET__MOVE", payload: move };
};

export {
  setHead,
  setSnake,
  addCord,
  setInit,
  setBoardFood,
  setFood,
  removeCord,
  incScore,
  resetSnake,
  resetBoard,
  setMove,
};
