import MapboxDraw from '@mapbox/mapbox-gl-draw';
import constate from 'constate';
import { useCallback, useState } from 'react';

type IMapData = {
  initialNodedata: any;
  drawInstance: MapboxDraw | null;
};

function useMapData({ initialNodedata = null, drawInstance = null }: IMapData) {
  const [nodeData, setNodedata] = useState(initialNodedata);
  const [draw, setDrawInstance] = useState(drawInstance);
  const updateNoteData = useCallback((data: any) => {
    setNodedata(data);
  }, []);
  const updateDrawInstance = useCallback((draw: any) => {
    setDrawInstance(draw);
  }, []);
  return { nodeData, draw, updateNoteData, updateDrawInstance };
}

export const [MapDataProvider, useNodeData, useDraw, useUpdateNoteData, useUpdateDrawInstance] = constate(
  useMapData,
  (value) => value.nodeData,
  (value) => value.draw,
  (value) => value.updateNoteData,
  (value) => value.updateDrawInstance,
);
