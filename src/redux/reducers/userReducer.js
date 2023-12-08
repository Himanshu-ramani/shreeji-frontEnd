import { UPDATE_USER } from "../actions/userActions";

const initState = {};

const userReducer = (state = initState, action) => {
  if (action.type === UPDATE_USER) return { ...state, ...action.payload };
  return state;
};

export default userReducer;
