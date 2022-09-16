import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import slectedTicketSlice from "modules/Ticket/reducer/slectedTicketSlice";

import ticketsSlice from "modules/Ticket/reducer/ticketsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ticket: ticketsSlice,
    slectedTickets: slectedTicketSlice
  },
});

export default store;
