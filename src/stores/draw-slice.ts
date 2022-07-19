import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type GeoMetryType = {
  coordinates: number[] | Array<number[]> | Array<Array<number[]>>;
  type: string;
};

const Feature = {
  Feature: 'Feature',
} as const;

export type FeaturesType = {
  id: string;
  properties: Record<string, any>;
  geometry: GeoMetryType;
  type: keyof typeof Feature;
};

export type DrawState = {
  modalIsOpen: boolean; // 新增弹窗是否打开
  features?: FeaturesType;
  cancleCreate: boolean; // 是否取消新建操作
};

const emptyFeatures = {
  id: '',
  properties: {},
  type: Feature.Feature,
  geometry: {
    type: 'Point',
    coordinates: [],
  },
};

const initialState: DrawState = {
  modalIsOpen: false,
  features: emptyFeatures,
  cancleCreate: false,
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
    setCancleCreate: (state, action: PayloadAction<boolean>) => {
      state.cancleCreate = action.payload;
    },
  },
});

export const { setModalOpen, setFeatures, setCancleCreate } = drawSlice.actions;

export const drawSelector = (state: AppState) => {
  return state[name];
};

export default drawSlice;
