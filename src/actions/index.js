const setHead = (head) => {
  return { type: "SET__HEAD", payload: head };
};

const setInit = (cord) => {
  return { type: "SET__INIT", payload: cord };
};
const setSnake = (cord) => {
  return { type: "SET__SNAKE", payload: cord };
};
const setBoardFood = (cord) => {
  return { type: "SET__BOARD__FOOD", payload: cord };
};
const setFood = (cord) => {
  return { type: "SET__FOOD", payload: cord };
};

const addCord = (cord) => {
  return { type: "ADD__CORD", payload: cord };
};
const removeCord = () => {
  return { type: "REMOVE__CORD" };
};

export {
  setHead,
  setSnake,
  addCord,
  setInit,
  setBoardFood,
  setFood,
  removeCord,
};
