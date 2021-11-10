import axios from "axios";

export function orderByScore(score, filterdata) {
  return async function (dispatch) {
    try {
      let json = await axios(
        `/courses?score=${score ? score : ""}`,
        filterdata
      );
      return dispatch({
        type: "ORDER_BY_SCORE",
        payload: json.data,
      });
    } catch (error) {
      console.log("error order score", error);
    }
  };
}
