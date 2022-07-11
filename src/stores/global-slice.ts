import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type GlobalState = {
  sideMenuOpen: boolean; // 侧边栏是否展开
};

const initialState: GlobalState = {
  sideMenuOpen: false,
};

const name = 'global';

export const globalSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setSideMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.sideMenuOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSideMenuOpen } = globalSlice.actions;

export const globalSelector = (state: AppState) => {
  return state[name];
};

export default globalSlice;
