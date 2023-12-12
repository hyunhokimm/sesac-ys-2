const ADD = "name/ADD";
const MINU = "name/MINU";

export const nameAdd = (name) => ({ type: ADD, name });
export const nameMinus = (name) => ({ type: MINU, name });

const nameReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { name: action.name }];

    case MINU:
      return state.filter((item) => item.name !== action.name);
    default:
      return state;
  }
};

export default nameReducer;
