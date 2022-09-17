import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../apis/movieAPI";
const initialState = {
  tickets: [],
  isLoading: false,
  error: null,

};

export const getTicketDetails = createAsyncThunk(
  "ticket/tickets/getTickets",
  async (ticketId, { rejectWithValue }) => {
    try {
      const data = await movieAPI.getTicketDetails(ticketId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ticketsSlice = createSlice({
  name: "ticket/tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTicketDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTicketDetails.fulfilled, (state, { payload }) => {
      state.tickets = payload;
      state.isLoading = false;
      
    });
    builder.addCase(getTicketDetails.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
    builder.addCase("selectTicket", (state, { payload }) => {
      
      state.tickets = payload;
      state.isLoading = false;
      
    })
  },
});


export default ticketsSlice.reducer;
