import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MovieTypes = "movie" | "series" | "episode";

interface MovieState {
  title: string;
  year?: string;
  type: MovieTypes;
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
    setYear(state, action: PayloadAction<string | undefined>) {
      state.year = action.payload;
    },
    setType(state, action: PayloadAction<MovieTypes>) {
      state.type = action.payload;
    },
  },
});

export const { setTitle, setYear, setType } = movieSlice.actions;

export default movieSlice.reducer;