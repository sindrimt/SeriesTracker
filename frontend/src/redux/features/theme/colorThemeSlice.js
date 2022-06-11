import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const colorThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
