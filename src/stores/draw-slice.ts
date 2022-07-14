import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type DrawState = {
  modalIsOpen: boolean; // 侧边栏是否展开
};

const initialState: DrawState = {
  modalIsOpen: false,
};

const name = 'draw';

export const drawSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { setModalOpen } = drawSlice.actions;

export const drawSelector = (state: AppState) => {
  return state[name];
};

export default drawSlice;
