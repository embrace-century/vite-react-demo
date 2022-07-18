import React from 'react';

import { EditForm } from '@/components/form/EditForm';
import { MapboxInstance } from '@/components/mapbox/MapboxInstance';

const Map = () => (
  <>
    <MapboxInstance />
    <EditForm />
  </>
);

export default Map;
