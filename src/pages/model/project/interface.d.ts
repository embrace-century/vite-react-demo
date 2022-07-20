import { DateFromISOString } from 'io-ts-types';

export type IProject = {
  id: number;
  uuid: string;
  name: string;
  icm_path: string;
  synced: boolean;
};
