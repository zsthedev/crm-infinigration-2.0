import axios from "axios";
import { server } from "../store";

export const createLead = (leads) => async (dispatch) => {
  dispatch({ type: "createLeadRequest" });

  try {
    const { data } = await axios.post(
      `${server}/createlead`,
      { leads },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "createLeadSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "createLeadFail", payload: error.response.data.message });
  }
};

export const getAllLeads = () => async (dispatch) => {
  dispatch({ type: "allLeadsRequest" });

  try {
    const { data } = await axios.get(
      `${server}/leads`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "allLeadsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "allLeadsFail", payload: error.response.data.message });
  }
};

export const getLeadDetails = (id) => async (dispatch) => {
  dispatch({ type: "getLeadDetailsRequest" });

  try {
    const { data } = await axios.get(
      `${server}/lead/${id}`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "getLeadDetailsSuccess", payload: data.lead });
  } catch (error) {
    dispatch({ type: "getLeadDetailsFail", payload: error.response.data.message });
  }
};

export const updateLeadStatus = (id, status) => async (dispatch) => {
  dispatch({ type: "updateLeadStatusRequest" });

  try {
    const { data } = await axios.put(
      `${server}/updateleadstatus`,
      { id, status },

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "updateLeadStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateLeadStatusFail",
      payload: error.response.data.message,
    });
  }
};

export const getTaskSummary = (id, status) => async (dispatch) => {
  dispatch({ type: "getTasksSummaryRequest" });

  try {
    const { id } = await axios.get(
      `${server}/lead/${id}/tasks`,

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "getTasksSummarySuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getTasksSummaryFail",
      payload: error.response.data.message,
    });
  }
};

export const addFollowUpDate = (leadId, date, taskId) => async (dispatch) => {
  dispatch({ type: "addFollowUpDateRequest" });

  try {
    const { data } = await axios.put(
      `${server}/lead/addfollowupdate`,
      { leadId: leadId, date: date, taskId: taskId },

      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch({ type: "addFollowUpDateSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addFollowUpDateFail",
      payload: error.response.data.message,
    });
  }
};
