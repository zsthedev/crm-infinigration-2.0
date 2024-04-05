import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducers";

export const server = "https://infinigration-crm-backend.onrender.com/api/v1";
export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});
