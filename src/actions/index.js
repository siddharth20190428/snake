const newHead = (head) => {
  return {
    type: "NEW_HEAD",
    payload: head,
  };
};

export { newHead };
