import { createSlice } from "@reduxjs/toolkit";
import { SlideData } from "~/features/apiSlice";

interface SliderStore {
  playlist: SlideData[];
  currentSlide: number;
}

const initialState: SliderStore = {
  playlist: [],
  currentSlide: 0,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    loadPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    nextSlide: state => {
      if (state.currentSlide < state.playlist.length - 1) {
        state.currentSlide += 1;
      } else {
        state.currentSlide = 0;
      }
    },
  },
});

export const { loadPlaylist, nextSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
