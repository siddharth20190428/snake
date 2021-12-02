const setHead = (head) => {
  return { type: "SET__HEAD", payload: head };
};
const addCord = (cord) => {
  return { type: "ADD__CORD", payload: cord };
};

export { setHead, addCord };
