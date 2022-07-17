import { DateFromISOString, DateFromISOStringC } from 'io-ts-types';

export type INode = {
  id: number;
  uuid: string;
  scenario_id: number;
  system_type: string;
  lonlat: IPoint;
  replaced: boolean;
  created_at: DateFromISOString;
  updated_at: DateFromISOString;
  icm_id: string;
  ground_level: string;
  flood_level: string;
  deleted_at: DateFromISOString;
  xy: IPoint;
  survey: boolean;
  zoom: number;
  remarks: string;
};
