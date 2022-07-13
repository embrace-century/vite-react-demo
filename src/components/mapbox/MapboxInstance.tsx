import { Form, Modal } from '@douyinfe/semi-ui';
import React, { useCallback, useState } from 'react';
import Map, { MapLayerMouseEvent } from 'react-map-gl';

import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_BEARING,
  MAPBOX_DOUBLE_CLICK_ZOOM,
  MAPBOX_MAX_ZOOM,
  MAPBOX_MIN_ZOOM,
  MAPBOX_PITCH,
  MAPBOX_SCROLL_ZOOM,
  MAPBOX_STYLE,
  MAPBOX_ZOOM,
} from '@/constants/default-settings';

import ControlPanel from './control-panel';
import DrawControl from './draw-control';

const MAPBOX_STYLE_CONST = {
  version: 8,
  name: 'Positron',
  metadata: {},
  sources: {},
  layers: [],
};

export const MapboxInstance = () => {
  const [features, setFeatures] = useState({});
  const [mapLat, setMapLat] = useState(0);
  const [mapLng, setMapLng] = useState(0);
  const [mapX, setMapx] = useState(0);
  const [mapY, setMapY] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // drawer的事件处理
  const onUpdate = useCallback((e: any) => {
    console.log('drawer update');
    setFeatures((currFeatures) => {
      const newFeatures: any = { ...currFeatures };
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback((e: any) => {
    setFeatures((currFeatures) => {
      const newFeatures: any = { ...currFeatures };
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  // mapbox的事件处理
  const handleMapCLick = useCallback((event: MapLayerMouseEvent) => {
    // 记录点击的经纬度
    const {
      lngLat: { lat, lng },
      point: { x, y },
    } = event;
    setMapLat(lat);
    setMapLng(lng);
    setMapx(x);
    setMapY(y);
    setModalVisible(true);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Map
        bearing={MAPBOX_BEARING}
        doubleClickZoom={MAPBOX_DOUBLE_CLICK_ZOOM}
        initialViewState={{
          longitude: 114.380512,
          latitude: 30.479635,
          zoom: 3.5,
        }}
        mapStyle={MAPBOX_STYLE_CONST}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        maxZoom={MAPBOX_MAX_ZOOM}
        minZoom={MAPBOX_MIN_ZOOM}
        pitch={MAPBOX_PITCH}
        scrollZoom={MAPBOX_SCROLL_ZOOM}
        style={{ width: '100vw', height: '80vh' }}
        zoom={MAPBOX_ZOOM}
        onClick={handleMapCLick}
      >
        <DrawControl
          controls={{
            polygon: true,
            point: true,
            line_string: true,
            trash: true,
          }}
          defaultMode="draw_polygon"
          displayControlsDefault={false}
          position="top-left"
          onCreate={onUpdate}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </Map>
      <ControlPanel polygons={Object.values(features)} />
      <Modal
        closeOnEsc={true}
        title="POINT地理信息"
        visible={modalVisible}
        onCancel={closeModal}
        onOk={closeModal}
      >
        <Form
          labelAlign="right"
          labelCol={{ span: 4 }}
          labelPosition="left"
          wrapperCol={{ span: 20 }}
        >
          <Form.Input
            field="lat"
            initValue={mapLat}
            label="纬度"
            placeholder="请输入姓名"
            style={{ width: 250 }}
            trigger="blur"
          />
          <Form.Input
            field="lng"
            initValue={mapLng}
            label="经度"
            placeholder="请输入经度"
            style={{ width: 250 }}
            trigger="blur"
          />
          <Form.Input
            field="mapX"
            initValue={mapX}
            label="X"
            placeholder="请输入X"
            style={{ width: 250 }}
            trigger="blur"
          />
          <Form.Input
            field="mapY"
            initValue={mapY}
            label="Y"
            placeholder="请输入Y"
            style={{ width: 250 }}
            trigger="blur"
          />
        </Form>
      </Modal>
    </>
  );
};
