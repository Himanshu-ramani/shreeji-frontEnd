import axios from "axios";
import { store } from ".";

const getWebsite = () => {
  return "http://localhost:5000";
};
const getToken = () => {
  const state = store.getState();
  console.log(state?.user?.user?.accessToken);
  return `basic ${state?.user?.user?.accessToken}`;
};
const apiCall = async ({ endpoint, method = "GET", ...others }) => {
  let website = getWebsite();
  let token = getToken();
  try {
    let { data: res } = await axios({
      url: `${website}/${endpoint}`,
      method,
      headers: { token: token },
      ...(others || {}),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
function isObjWithValues(value) {
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    // Check if the object has at least one property
    return Object.keys(value).length > 0;
  }
  return false; // Return false for non-object values
}
function isArrayWithValues(value) {
  // Check if the value is an array
  if (Array.isArray(value)) {
    // Check if the array has non-empty elements
    return value.length > 0;
  }
  return false; // Return false for non-array values
}
export { getWebsite, apiCall, isObjWithValues, isArrayWithValues, getToken };
