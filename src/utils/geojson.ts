import { FeatureCollection, Position } from 'geojson';
import { chunk } from 'lodash-es';

// 空数据
export const emptyGeometry: FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
};

type ICoordinates = Position | null[];

export const convertPointToCoordinates = (xyStr: IPointDef | null): Position | null[] => {
  // xyStr: "POINT (114.2143432535 34.214342)"
  // numStrArr: ['114', '2143432535', '34', '214342']
  // numStrChunks: [ ['114', '2143432535'], ['34', '214342'] ]
  // coordinates: [ 114.2143432535, 34.214342 ]

  let coordinates: ICoordinates = [null, null];

  if (xyStr) {
    const numStrArr = xyStr.match(/\d+/g);
    const numStrChunks = chunk(numStrArr, 2);
    coordinates = numStrChunks.map((ele: string[]) => {
      const [left, right] = ele;
      return Number(`${left}.${right}`);
    });
  }

  return coordinates;
};
