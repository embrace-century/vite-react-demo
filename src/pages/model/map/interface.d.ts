export type IPoint = {
  class_name: string; // 使用固定值node
  flood_level: number; // 洪水高程
  ground_level: number; // 地面高程
  lat: number;
  lon: number;
  node_type: string;
  remarks: string;
  scenario_id: number;
  system_type: number;
  x: number;
  y: number;
};
