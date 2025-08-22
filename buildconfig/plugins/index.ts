import type { PluginOption } from 'vite';
import { autoImportPlugin } from './autoImport';

export function createVitePlugins() {
  // 插件参数
  const vitePlugins: PluginOption[] = [
    // 自动导入
    autoImportPlugin(),
  ];

  return vitePlugins;
}
