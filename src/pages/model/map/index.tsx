import React from 'react';

import { MapboxInstance } from '@/pages/model/map/_comp/MapboxInstance';

import { AddForm } from './_comp/AddForm';
import { EditForm } from './_comp/EditForm';

const Map = () => (
  <>
    <MapboxInstance />
    <EditForm />
    <AddForm />
  </>
);

export default Map;
