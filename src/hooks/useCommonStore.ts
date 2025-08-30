import { useUserStore } from '@/stores';

/**
 * 获取常用的状态数据
 */
export const useCommonStore = () => {
  // 权限
  const permissions = useUserStore((state) => state.permissions);
  // 用户ID
  const userId = useUserStore((state) => state.userInfo.id);
  // 用户名
  const username = useUserStore((state) => state.userInfo.username);
  // 是否窗口最大化

  return {
    permissions,
    userId,
    username,
  } as const;
};
