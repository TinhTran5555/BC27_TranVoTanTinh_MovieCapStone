import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {

  selectedTicket: [],
};

const selectTicketHandler = (state = initialState, { payload }) => {
  console.log("payload", payload);

  const index = state.selectedTicket.findIndex(
    (item) => 
    item === payload.maGhe
  );
console.log(index);

console.log(payload.maGhe);
  if (index === -1) {
    const newSelectedTicket = [...state.selectedTicket, payload.maGhe ];
    
    return { ...state, selectedTicket: newSelectedTicket };
  }
  const newSelectedTicket = state.selectedTicket.filter(
    (item) => item !== payload.maGhe
  );
  console.log(newSelectedTicket);
  return { ...state, selectedTicket: newSelectedTicket };
};

const removeAllTicketHandler = (state) => {
  state.danhSachVe.length = 0;
};
const selectedTicketsSlice = createSlice({
  name: "ticket/selectedTickets",
  initialState,
  reducers: {
    selectTicketAction: selectTicketHandler,
    removeAllTicketsAction: removeAllTicketHandler,
  },
});
export const { selectTicketAction, removeAllTicketsAction } =
  selectedTicketsSlice.actions;
export default selectedTicketsSlice.reducer;
