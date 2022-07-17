import { Feature, FeatureCollection } from 'geojson';

import { convertPointToCoordinates } from '@/utils/geojson';

import { INode } from './interface';

export const buildGeojsonFromPoint = (data?: INode[]): FeatureCollection => {
  let collection: Feature[] = [];

  if (data?.length) {
    for (const ele of data) {
      const { id, lonlat, xy, ...rest } = ele;

      collection.push({
        id,
        type: 'Feature',
        properties: { ...rest, xy: convertPointToCoordinates(xy) },
        geometry: {
          type: 'Point',
          coordinates: convertPointToCoordinates(lonlat),
        },
      });
    }
  }

  return {
    type: 'FeatureCollection',
    features: collection,
  };
};