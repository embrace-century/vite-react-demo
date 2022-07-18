import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useCallback, useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl, useMap } from 'react-map-gl';

import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import NodeService from '@/pages/model/node-layer/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, FeaturesType, setCancleCreate, setFeatures, setModalOpen } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type DrawEvent = {
  features: FeaturesType[];
};

/**
 * 新建点未提交的时候，点关闭，要删除点，要获取到drawInstance是个问题
 * 使用redux也不合适
 */

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();
  const { current } = useMap();

  const { cancleCreate, features } = useAppSelector(drawSelector);

  const [drawInstance, setDrewInstance] = useState<MapboxDraw>();
  const { position } = props;
  let touchCreate = false;

  // 地图加载之后，查询项目下已经建好的点线并绘制
  useEffect(() => {
    if (drawInstance) {
      if (current && drawInstance) {
        current.on('styledata', () => {
          NodeService.findAll().then((data) => {
            const nodeData = buildGeojsonFromPoint(data);
            drawInstance.set(nodeData);
          });
        });
      }
    }
  }, [current, drawInstance, cancleCreate, features]);

  // 新建弹窗关闭后，执行删除操作
  useEffect(() => {
    if (cancleCreate && features?.id && drawInstance) {
      const fetureId = features?.id;
      drawInstance.delete(fetureId!);
    }
  }, [cancleCreate, features, drawInstance]);

  const onCreate = (event: DrawEvent) => {
    dispatch(setModalOpen(true));
    const { features } = event;
    touchCreate = true;
    dispatch(setFeatures(features[0])); // geometry数据更新到draw-slice
    dispatch(setCancleCreate(false));
  };

  const onSelectionchange = useCallback(
    (event: DrawEvent) => {
      if (touchCreate) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        touchCreate = false;
        return;
      }
      const { features } = event;
      // 未选中图形时，features是一个空数组
      if (!features.length) return;
      dispatch(setSideSheetVisible(true));
      dispatch(setFeatures(features[0]));
    },
    [dispatch, touchCreate],
  );

  const onDrawDelete = (event: any) => {
    console.log('🚀 ~ file: draw-control.ts ~ line 58 ~ onDrawDelete ~ event', event);
    dispatch(setSideSheetVisible(false));
    // Todo: 调用实例的delete方法时，是否会触发delete事件
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      map.on('draw.delete', onDrawDelete);
      map.on('draw.selectionchange', onSelectionchange);
      const draw = new MapboxDraw(props);
      setDrewInstance(draw);
      return draw;
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', onCreate);
      map.on('draw.selectionchange', onSelectionchange);
      map.on('draw.delete', onDrawDelete);
    },
    {
      position: position,
    },
  );

  return null;
}
