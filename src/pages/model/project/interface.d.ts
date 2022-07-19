import { DateFromISOString } from 'io-ts-types';

export type IProject = {
  id: number;
  uuid: string;
  name: string;
  icm_path: string;
  synced: boolean;
};

export type INetwork = {
  id: number;
  name: string;
  scenario_id: number;
  // uuid: string;
  // project_id: number;
  // icm_id: number;
  // icm_type: string;
  // deleted_at: DateFromISOString | null;
  // created_at: DateFromISOString;
  // updated_at: DateFromISOString;
};
