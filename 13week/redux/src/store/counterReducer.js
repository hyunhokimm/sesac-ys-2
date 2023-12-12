const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const increase = (money) => ({ type: INCREMENT, money });
export const decrease = (money) => ({ type: DECREMENT, money });

const initialValue = { money: 0 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return { money: state.money + action.money };
    case DECREMENT:
      return { money: state.money - action.money };
    default:
      return state;
  }
};

export default counterReducer;
