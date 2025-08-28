import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createVitePlugins } from './buildconfig/plugins';
import { createProxy } from './buildconfig/vite/proxy';
import { handleEnv } from './buildconfig/utils/helper.ts';

export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = handleEnv(env);
  const { VITE_SERVER_PORT, VITE_PROXY } = viteEnv;

  return {
    plugins: [react(), createVitePlugins()],
    resolve: {
      alias: {
        '@': '/src',
        '#': '/types',
      },
    },
    css: {
      preprocessorOptions: {
        less: {
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
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), createVitePlugins()],
//
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
//
//   server: {
//     open: true,
//     port: VITE_SERVER_PORT,
//     // 跨域处理
//     proxy: createProxy(VITE_PROXY),
//   },
// });
