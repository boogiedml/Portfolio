import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import appSettingReducer from "./features/appSettingSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    appSetting: appSettingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
