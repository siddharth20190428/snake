const newHead = (head) => {
  return {
    type: "NEW_HEAD",
    payload: head,
  };
};

const setHead = (head) => {
  return {
    type: "SET_HEAD",
    payload: head,
  };
};

const inc_Score = () => {
  return {
    type: "INC_SCORE",
  };
};

export { newHead, inc_Score, setHead };
