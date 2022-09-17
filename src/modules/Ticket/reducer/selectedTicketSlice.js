import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  selectedTicket: [],
  
};


const selectTicketHandler = (state = initialState, { payload }) => {
  
 
  const index = state.selectedTicket.findIndex(
    (item) => 
    item.maGhe === payload.maGhe
  );

    

  if (index === -1) {
    const newSelectedTicket = [...state.selectedTicket, payload ];
    
    return { ...state, selectedTicket: newSelectedTicket };
  }
  const newSelectedTicket = state.selectedTicket.filter(
    (item) => 
    item.maGhe !== payload.maGhe
    
  );
  

  return { ...state, selectedTicket: newSelectedTicket };
};

const removeAllTicketHandler = (state) => {
  state.selectedTicket.length = 0;
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
