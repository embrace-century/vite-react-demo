import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { MenuItem, menuItems } from '../mock/menuItem';
import { AppState } from './index';

export type MenuItemState = {
  menuItem: MenuItem[];
};

const initialState: MenuItemState = {
  menuItem: menuItems,
};

const name = 'menuItem';

export const menuItemSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItem.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMenuItem } = menuItemSlice.actions;

export const menuSelector = (state: AppState) => {
  return state[name];
};

export default menuItemSlice;
