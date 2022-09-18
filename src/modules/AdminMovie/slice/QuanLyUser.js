import movieAPI from "apis/movieAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAdmin: [],
  isLoading: false,
};

const { delUser, getUser, addUser , searchUser} = movieAPI;

export const getDataUser = createAsyncThunk(
  "user/getUser",
  async (tuKhoa, { rejectWithValue }) => {
    try {
      const data = await getUser(tuKhoa);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const searchDataUser = createAsyncThunk(
//   "user/searchUser",
//   async (tuKhoa, { rejectWithValue }) => {
//     try {
//       const data = await searchUser(tuKhoa);
//       console.log(tuKhoa);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const deleteUser = createAsyncThunk(
  "user/delUser",
  async (taiKhoan, { rejectWithValue }) => {
    try {
      const data = await delUser(taiKhoan);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addUserData = createAsyncThunk(
  "user/addUser",
  async (values, { rejectWithValue }) => {
    try {
      const data = await addUser(values);
      return data;
    } catch (error) {
      console.log(values);
      return rejectWithValue(error);
    }
  }
);

const userAdminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userAdmin = payload;
      })
      .addCase(getDataUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default userAdminSlice.reducer;
