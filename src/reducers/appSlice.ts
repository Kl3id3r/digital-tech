// @Vendors
import React from "react";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// @Types
import { IAppState } from "../types/IAppState";
import { IAction } from "../types/IAction";

const PREFIX = "APP";
// Estado inicial del reducer
const initialState: IAppState = {
  modalOpen: false,
  modalContent: null,
};

const appAdapter = createEntityAdapter<IAppState>({});
export const appSlice = createSlice({
  name: PREFIX,
  initialState: appAdapter.getInitialState(initialState),
  reducers: {
    openModal: {
      reducer: (state, action: IAction) => {
        state.modalOpen = true;
        state.modalContent = action.payload as React.ComponentElement<
          unknown,
          any
        >;
      },
      prepare: (value: string | React.ComponentElement<unknown, any>) => ({
        payload: value,
      }),
    },
  },
});

// Actions
export const { openModal } = appSlice.actions;

// Reducer
export default appSlice.reducer;
