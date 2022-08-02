import { createContext } from 'react';

const nodeClick = (event: any) => {
  console.log('🚀 ~ file: context.ts ~ line 4 ~ nodeClick ~ event', event);
};

// 初始化数据
export const initData: Record<string, Function[]> = {
  node: [nodeClick],
};

type ILayerContext = {
  layerHandles: Record<string, Function[]>;
  setLayers: (id: string, fns: Function[]) => void;
};

// 定义好初始化数据结构
export const layerHandlerInitData: ILayerContext = {
  layerHandles: {
    // node: [nodeClick],
  },
  setLayers: function (layerId: string, layerHandleFns: Function[]) {
    layerHandlerInitData.layerHandles[layerId] = layerHandleFns;
  },
};

export const MapLayerContext = createContext(layerHandlerInitData);
