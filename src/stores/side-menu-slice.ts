import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { menuItems, MenuItem } from '../mock/menuItem';
import { AppState } from './index';

export interface MenuItemState {
  menuItem: MenuItem[]
}

const initialState: MenuItemState = {
  menuItem: menuItems,
}

const name = 'menuItem';

export const menuItemSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItem.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMenuItem } = menuItemSlice.actions

export const menuSelector = (state: AppState) => {
  console.log("🚀 ~ file: side-menu-slice.ts ~ line 32 ~ menuSelector ~ state", state)
  return state[name]
};

export default menuItemSlice