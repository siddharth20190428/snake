const setHead = (head) => {
  return { type: "SET__HEAD", payload: head };
};
const setSnake = (cord) => {
  return { type: "SET__SNAKE", payload: cord };
};

export { setHead, setSnake };
