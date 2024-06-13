import axios from "axios";
import { server } from "../store";

export const createRemarks = (id, title, remark) => async (dispatch) => {
  dispatch({ type: "createRemarkRequest" });

  try {
    const { data } = await axios.post(
      `${server}/create_remark/${id}`,
      {title, remark},

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "createRemarkSuccess", payload: data.programs });
  } catch (error) {
    dispatch({
      type: "createRemarkFail",
      payload: error.response.data.message,
    });
  }
};
