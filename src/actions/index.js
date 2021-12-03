const setHead = (head) => {
  return { type: "SET__HEAD", payload: head };
};

const setInit = (cord) => {
  return { type: "SET__INIT", payload: cord };
};
const setSnake = (cord) => {
  return { type: "SET__SNAKE", payload: cord };
};
const setFood = (cord) => {
  return { type: "SET__FOOD", payload: cord };
};

const addCord = (cord) => {
  return { type: "ADD__CORD", payload: cord };
};

export { setHead, setSnake, addCord, setInit, setFood };
