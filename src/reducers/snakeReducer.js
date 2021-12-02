const initialState = {
  dx: 1,
  dy: 0,
  cords: [
    [4, 5],
    [4, 6],
  ],
};

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD__CORD":
      let newCords = [...state.cords];
      newCords.push(action.payload);
      console.log(newCords);
      return { ...state, cords: newCords };
    default:
      return state;
  }
};

export default headReducer;
