import { apiCall, isArrayWithValues } from "../../helper";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// fetch products
export const fetchProducts = (products) => {
  return async (dispatch) => {
    try {
      const res = await apiCall({
        endpoint: "api/products",
      });
      if (isArrayWithValues(res)) {
        dispatch(
          fetchProductsSuccess(
            res?.map((prod) => {
              if (!isArrayWithValues(prod.variation)) delete prod.variation;
              return prod;
            })
          )
        );
      }
    } catch (error) {
      console.log("error");
    }
    // dispatch(fetchProductsSuccess(products));
  };
};

export const fetchBanner = () => {
  return async (dispatch) => {
    try {
      const res = await apiCall({
        endpoint: "api/settings/home",
      });
      if (res?.success) {
        dispatch({ type: UPDATE_PRODUCTS, payload: res?.data });
      }
    } catch (error) {
      console.log("error");
    }
    // dispatch(fetchProductsSuccess(products));
  };
};
