import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createVitePlugins } from './buildconfig/plugins';
import { createProxy } from './buildconfig/vite/proxy';
import { handleEnv } from './buildconfig/utils/helper.ts';
import path from 'path';
import UnoCSS from 'unocss/vite';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = handleEnv(env);
  const { VITE_SERVER_PORT, VITE_PROXY } = viteEnv;

  return {
    plugins: [react(), createVitePlugins(), UnoCSS()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': '/types',
        '@styles': path.resolve(__dirname, 'src/assets/css'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/global-variables.scss" as vars;`, // 全局导入变量
          javascriptEnabled: true,
          charset: false,
        },
      },
    },
    server: {
      open: true,
      port: VITE_SERVER_PORT,
      // 跨域处理
      proxy: createProxy(VITE_PROXY),
    },
  };
});
