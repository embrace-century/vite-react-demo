import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './index';

export type GeoMetryType = {
  coordinates: number[];
  type: string;
};

const Feature = {
  Feature: 'Feature',
} as const;

export type FeaturesType = {
  id?: number;
  properties: Record<string, any>;
  geometry: GeoMetryType;
  type: keyof typeof Feature;
};

export type DrawState = {
  nodeId: number | null;
  features?: FeaturesType;
  cancleCreate: boolean; // 是否取消新建操作
  mode: 'add' | 'edit';
};

export const emptyFeatures = {
  id: 0,
  properties: {},
  type: Feature.Feature,
  geometry: {
    type: 'Point',
    coordinates: [],
  },
};

const initialState: DrawState = {
  nodeId: null,
  features: emptyFeatures,
  cancleCreate: false,
  mode: 'add',
};

const name = 'draw';

export const drawSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    setNodeId: (state, action: PayloadAction<number>) => {
      state.nodeId = action.payload;
    },
    setFeatures: (state, action: PayloadAction<FeaturesType>) => {
      state.features = action.payload;
    },
    setCancleCreate: (state, action: PayloadAction<boolean>) => {
      state.cancleCreate = action.payload;
    },
    setMode: (state, action: PayloadAction<'add' | 'edit'>) => {
      state.mode = action.payload;
    },
  },
});

export const { setNodeId, setFeatures, setCancleCreate, setMode } = drawSlice.actions;

export const drawSelector = (state: AppState) => {
  return state[name];
};

export default drawSlice;
