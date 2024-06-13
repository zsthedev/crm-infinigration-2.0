import { createReducer } from "@reduxjs/toolkit";

export const processReducer = createReducer(
  {},
  {
    createProcessRequest: (state) => {
      state.loading = true;
    },

    createProcessSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createProcessFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createProcessRequest: (state) => {
      state.loading = true;
    },

    getAllProgramsRequest: (state, action) => {
      state.loading = true;
    },
    getAllProgramsSuccess: (state, action) => {
      state.loading = false;
      state.process = action.payload.process;
    },
    getAllProgramsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  }
);
