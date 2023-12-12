import {
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS,
} from "../actions/productActions";

const initState = {
  products: [],
};

const productReducer = (state = initState, action) => {
  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (action.type === UPDATE_PRODUCTS) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};

export default productReducer;
