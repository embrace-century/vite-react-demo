/**
 * env-cmd 注入 node 运行环境变量
 *  - env-cmd 支持定义任意多的环境，自动注入定义的环境变量，仅需在 package.json scripts 启动时，通过 -e 指定运行时对应的环境；
 *  - https://github.com/toddbluhm/env-cmd
 */

const endpoint = 'https://wpdc.api.rainmind.cn';
const ws_endpoint = 'wss://wpdc.api.rainmind.cn';

module.exports = {
  development: {
    VITE_APP_ENDPOINT: endpoint,
  },
  local: {
    VITE_APP_ENDPOINT: 'http://localhost:3000',
  },
  production: {
    VITE_APP_ENDPOINT: endpoint,
  },
};
