import { createSlice } from "@reduxjs/toolkit";

interface AppSettingState {
  isOpened: boolean;
}

const initialState: AppSettingState = {
  isOpened: false,
};

const appSettingSlice = createSlice({
  name: "appSetting",
  initialState,
  reducers: {
    openSetting: (state) => {
      state.isOpened = true;
    },
    closeSetting: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openSetting, closeSetting } = appSettingSlice.actions;

export default appSettingSlice.reducer;
