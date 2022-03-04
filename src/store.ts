// @Vendors
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// @Reducers
import authReducer from "./reducers/authSlice";
import appReducer from "./reducers/appSlice";

export const store = configureStore({
  reducer: {
    appReducer,
    authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
