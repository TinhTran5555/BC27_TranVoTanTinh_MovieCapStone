import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import selectedTicketSlice from "modules/Ticket/reducer/selectedTicketSlice";

import ticketsSlice from "modules/Ticket/reducer/ticketsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ticket: ticketsSlice,
    slectedTickets: selectedTicketSlice
  },
});

export default store;
