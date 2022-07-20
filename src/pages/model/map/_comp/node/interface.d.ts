import { DateFromISOString } from 'io-ts-types';

export type INode = {
  id: number;
  uuid: string;
  scenario_id: number;
  system_type: string;
  lonlat: IPointDef;
  replaced: boolean;
  created_at: DateFromISOString;
  updated_at: DateFromISOString;
  icm_id: string;
  ground_level: string;
  flood_level: string;
  deleted_at: DateFromISOString;
  xy: IPointDef;
  survey: boolean;
  zoom: number;
  remarks: string;
};

export type IPoint = {
  id?: number;
  class_name: string; // 使用固定值node
  flood_level: number; // 洪水高程
  ground_level: number; // 地面高程
  lat: number;
  lon: number;
  node_type: string;
  remarks: string;
  scenario_id?: number;
  system_type: number;
  x: number;
  y: number;
};
