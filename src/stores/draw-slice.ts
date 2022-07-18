import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type GeoMetryType = {
  coordinates: number[] | Array<number[]> | Array<Array<number[]>>;
  type: string;
};

export type FeaturesType = {
  properties: Object;
  geometry: GeoMetryType;
};

export type DrawState = {
  modalIsOpen: boolean; // 侧边栏是否展开
  features?: FeaturesType;
  drawInstance?: MapboxDraw;
};

const emptyFeatures = {
  properties: {},
  geometry: {
    type: 'Point',
    coordinates: [],
  },
};

const initialState: DrawState = {
  modalIsOpen: false,
  features: emptyFeatures,
};

const name = 'draw';

export const drawSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload;
    },
    setFeatures: (state, action: PayloadAction<FeaturesType>) => {
      state.features = action.payload;
    },
    setDrawInstance: (state, action: PayloadAction<FeaturesType>) => {
      state.features = action.payload;
    },
  },
});

export const { setModalOpen, setFeatures } = drawSlice.actions;

export const drawSelector = (state: AppState) => {
  return state[name];
};

export default drawSlice;
