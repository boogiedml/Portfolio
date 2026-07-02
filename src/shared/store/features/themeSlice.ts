import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "@/shared/types/theme";

const storedTheme = localStorage.getItem("theme");
const initialTheme =
  storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

const initialState: ThemeState = {
  theme: initialTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkMode: (state) => {
      state.theme = "dark";
    },
    lightMode: (state) => {
      state.theme = "light";
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;
