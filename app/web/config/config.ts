import { join } from 'path';
import { IConfig } from 'umi-types';
import routes from './router.config';
import theme from './theme';

const config: IConfig = {
  ssr: true,
  outputPath: '../public',
  plugins: [
    [
      'umi-plugin-react',
      {
        locale: {
          baseNavigator: false,
        },
        hd: false,
        antd: true,
        dva: {
          immer: true,
        },
        // TODO, page router css leak
        // dynamicImport: {
        //   webpackChunkName: true,
        // },
      },
    ],
  ],
  runtimePublicPath: true,
  disableCSSModules: true,
  cssModulesWithAffix: true,
  routes,
  theme,
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
};

export default config;
