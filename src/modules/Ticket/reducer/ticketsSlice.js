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
// export const selectTicketSlice = (state = initialState, action) => {
//   console.log('action', action)
//   //quan trong trnog code no ko work thi devtool ko lq em
//   //Anh dang mentor, em coi check lai flow code, cốnle log coi ra data ko, co gi toi anh fix tiep nhe
//   switch (action.type) {
//     case "selectTicket": {
//       //Code ko chay len reducer
//       const index = state.selectedTicket.findIndex(
//         (item) => item.stt === action.danhSachGhe.stt
//       );
//       if (index === -1) {
//         const newSelectedTicket = [
//           ...state.selectedTicket,
//           { ...action.danhSachGhe },
//         ];
//         return { ...state, selectedTicket: newSelectedTicket };
//       }
//       const newSelectedTicket = state.selectedTicket.filter(
//         (item) => item.name !== action.seats.name
//       );
//       return { ...state, selectedTicket: newSelectedTicket };
//     }
//     case "deleteTicket": {
//       const newSelectedTicket = state.selectedTicket.filter(
//         (item) => item.name !== action.seatsID.name
//       );
//       return { ...state, selectedTicket: newSelectedTicket };
//     }
//     default:
//       return state;
//   }
// };

export default ticketsSlice.reducer;
