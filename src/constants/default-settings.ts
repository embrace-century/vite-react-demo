/*
 * @Description: 项目默认设置
 *
 */
/**
 * @description: 环境设置
 * @param {*}
 * @return {*}
 */
type BuildEnv = 'development' | 'test' | 'pre' | 'production';

export const BUILD_ENV: BuildEnv = process.env.NODE_ENV as BuildEnv;
// 是否为本地开发环境
export const IS_PROD: boolean = BUILD_ENV === 'production';
export const IS_NOT_PROD: boolean = BUILD_ENV !== 'production';

// API地址
export const BASE_URL = 'api';

/**
 * @description: mapbox设置
 * @param {*}
 * @return {*}
 */
export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaGFucWl1IiwiYSI6ImNrZ2pjdmNsZTBveXkycW8zYjA4N3U0Ym8ifQ.SjP7d69NztifBh1z23BesQ';
export const MAPBOX_STYLE = 'mapbox://styles/hanqiu/cknu80yr10m4t17mkjk1a8g6a';
export const MAPBOX_CANVAS = 'mapbox-canvas'; // mapbox挂载的 dom 的 id
export const MAPBOX_ATTRIBUTION_CONTROL = false; // 控件

// 茶山刘的中心
export const MAPBOX_BEARING = 0; // 旋转
export const MAPBOX_CENTER: [number, number] = [114.380512, 30.479635];
export const MAPBOX_MAX_ZOOM = 24; // 最大缩放
export const MAPBOX_MIN_ZOOM = 13; // 最小缩放
export const MAPBOX_ZOOM = 14;
export const MAPBOX_PITCH = 0; // 倾斜

// 一个看效果的中心
// export const MAPBOX_BEARING = 120; // 旋转
// export const MAPBOX_CENTER: [number, number] = [114.401728, 30.481895];
// export const MAPBOX_MAX_ZOOM = 24; // 最大缩放
// export const MAPBOX_MIN_ZOOM = 13; // 最小缩放
// export const MAPBOX_ZOOM = 16;
// export const MAPBOX_PITCH = 62; // 倾斜

// 交互
export const MAPBOX_SCROLL_ZOOM = true; // 滚轮缩放
export const MAPBOX_DOUBLE_CLICK_ZOOM = false; // 双击缩放

/**
 * @description: 动画效果设置
 * @param {*}
 * @return {*}
 */
export const MOTION_DURATION = 100; // 一般的间隔
export const LAYER_CONTROL_DURATION = 1000; // 图层控制器鼠标移走的间隔

/**
 * @description: 项目定制设置
 * @param {*}
 * @return {*}
 */
export const ONLY_CHASHANLIU = false; // 是否只显示茶山刘
export const MASK_UNSCOPED = false; // 是否在图层上开启蒙层（比如非茶山刘的地方全部蒙上毛玻璃）
export const DRAWER_WIDTH = '25rem'; // 抽屉的宽度
export const DRAWER_HEIGHT = '20rem'; // 抽屉的宽度
export const DRAWER_MOTION_DURATION = 0.3; // 抽屉运动时长
export const BISHUI_SPACING = { NAV_HEIGHT: '60px', SIDE_WIDTH: '250px' }; // 内嵌在别人平台里, 上边/左边有侧边栏

/**
 * @description: 开发时候调试的打印设置
 * @param {*}
 * @return {*}
 */
export const SHOW_DATA_IN_CONSOLE = true; // 在控制台显示 一般接口 fetch 的结果
export const SHOW_MESSAGE_IN_CONSOLE = true; // 在控制台显示 websocket message 的结果
export const HIDE_MAP_WHEN_DEVELOPING_PAGE = IS_NOT_PROD && false; // 开发页面样式时不加载地图, 提升加载效率

/**
 * @description: 使用 deck.gl 构建图层, 开启了这个配置, 所有的图层会用 deck.gl 的图层做, 否则是原始的 mapbox 图层
 * @return {*}
 */
export const USE_DECKGL = false;
export const SHOW_MESSAGE_IN_POPUP = false;
export const MANUAL_RELATE = false;
