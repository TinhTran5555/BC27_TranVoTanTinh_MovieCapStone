import { configureStore } from "@reduxjs/toolkit";
import authSlice from "modules/Authentication/slices/authSlice";
import selectedTicketSlice from "modules/Ticket/reducer/selectedTicketSlice";
import movieAdminSlice from "modules/AdminMovie/slice/QuanlyPhimSlice";
import userAdminSlice from "modules/AdminMovie/slice/QuanLyUser";
import ticketsSlice from "modules/Ticket/reducer/ticketsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    ticket: ticketsSlice,
    slectedTickets: selectedTicketSlice,
    adminMovie: movieAdminSlice,
    adminUser: userAdminSlice
  },
});

export default store;
