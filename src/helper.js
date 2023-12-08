import axios from "axios";

const getWebsite = () => {
  return "http://localhost:5000";
};
const apiCall = async ({ endpoint, method = "GET", ...others }) => {
  let website = getWebsite();
  try {
    let { data: res } = await axios({
      url: `${website}/${endpoint}`,
      method,
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
export { getWebsite, apiCall, isObjWithValues };
