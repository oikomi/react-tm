import type { TFunction } from 'i18next';

/**
 * 设置标题
 * @param t - 国际化
 * @param title - 标题
 */
export function setTitle(t: TFunction, title: string) {
  const value = `${title ? title + '-' : ''}`;
  if (document.title === value) return;
  document.title = value;
}
