import { createSlice } from "@reduxjs/toolkit";
import { SlideData } from "../api/mockLoader";

interface SliderStore {
  slides: SlideData[];
  isLoading: boolean;
  isError?: string | null;
  currentSlide: number;
}

const initialState: SliderStore = {
  slides: [],
  isLoading: true,
  currentSlide: 0,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    loadSlides: (state, action) => {
      state.slides = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    nextSlide: state => {
      if (state.currentSlide < state.slides.length - 1) {
        state.currentSlide += 1;
      } else {
        state.currentSlide = 0;
      }
    },
  },
});

export const { loadSlides, nextSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
