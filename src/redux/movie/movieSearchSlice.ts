import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  title: string;
  year: string | undefined;
  type: "movie" | "series" | "episode";
}

const initialState: MovieState = {
  title: "Pokemon",
  year: undefined,
  type: "movie",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload;
    },
    setType(state, action: PayloadAction<"movie" | "series" | "episode">) {
      state.type = action.payload;
    },
  },
});

export const { setTitle, setYear, setType } = movieSlice.actions;

export default movieSlice.reducer;
