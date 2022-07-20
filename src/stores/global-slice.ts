import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type GlobalState = {
  sideSheetVisible: boolean; // 侧边栏是否展开
};

const initialState: GlobalState = {
  sideSheetVisible: true,
};

const name = 'global';

export const globalSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setSideSheetVisible: (state, action: PayloadAction<boolean>) => {
      state.sideSheetVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSideSheetVisible } = globalSlice.actions;

export const globalSelector = (state: AppState) => {
  return state[name];
};

export default globalSlice;
