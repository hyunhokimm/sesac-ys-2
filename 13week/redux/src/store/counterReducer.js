const initialValue = { number: 100 };

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default reducer;
