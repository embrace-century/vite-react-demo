import { FeatureCollection, Position } from 'geojson';
import { chunk } from 'lodash-es';

// 空数据
export const emptyGeometry: FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
};

export const convertPointToCoordinates = (xyStr: IPoint): Position => {
  // xyStr: "POINT (114.2143432535 34.214342)"
  // numStrArr: ['114', '2143432535', '34', '214342']
  // numStrChunks: [ ['114', '2143432535'], ['34', '214342'] ]
  // coordinates: [ 114.2143432535, 34.214342 ]
  const numStrArr = xyStr.match(/\d+/g);
  const numStrChunks = chunk(numStrArr, 2);
  const coordinates = numStrChunks.map((ele: string[]) => {
    const [left, right] = ele;
    return Number(`${left}.${right}`);
  });

  return coordinates;
};
