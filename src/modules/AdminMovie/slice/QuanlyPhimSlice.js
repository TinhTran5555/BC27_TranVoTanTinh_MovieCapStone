import movieAPI from "apis/movieAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieAdmin: [],
  isLoading: false,
};

const { delMovie, getMoviesPhim, addMovie } = movieAPI;

export const getDataMovies = createAsyncThunk(
  "movie/getMovie",
  async (tenPhim, { rejectWithValue }) => {
    try {
      const data = await getMoviesPhim(tenPhim);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movie/delMovie",
  async (tenPhim, { rejectWithValue }) => {
    try {
      const data = await delMovie(tenPhim);
      return data;
    } catch (error) {
      console.log(tenPhim);
      return rejectWithValue(error);
    }
  }
);
export const addMovieData = createAsyncThunk(
  "movie/addMovie",
  async (values, { rejectWithValue }) => {
    try {
      const data = await addMovie(values);
      return data;
    } catch (error) {
      console.log(values);
      return rejectWithValue(error);
    }
  }
);

const movieAdminSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.movieAdmin = payload;
      })
      .addCase(getDataMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default movieAdminSlice.reducer;
