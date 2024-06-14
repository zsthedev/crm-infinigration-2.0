import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducers";
import { leadsReducer } from "./reducers/leadsReducer";
import { adminReducer } from "./reducers/adminReducer";
import { programReducer } from "./reducers/programReducer";
import { contractReducer } from "./reducers/contractReducer";
import { invoiceReducer } from "./reducers/invoiceReducer";
import { remarkReducer } from "./reducers/remarksReducer";

export const server = "https://infinigration-crm-backend.onrender.com/api/v1";
export const store = configureStore({
  reducer: {
    user: authReducer,
    leads: leadsReducer,
    admin: adminReducer,
    program: programReducer,
    contract: contractReducer,
    invoices: invoiceReducer,
    remarks: remarkReducer,
  },
});
