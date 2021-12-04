export const getRandom = () => {
  return Math.floor(Math.random() * 9);
};

const initialState = {
  y: getRandom(),
  x: getRandom(),
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET__FOOD":
      return { ...action.payload };
    default:
      return state;
  }
};

export default foodReducer;
