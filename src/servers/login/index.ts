import type { LoginData, LoginResult } from '../../models/login';
import { request } from '../../utils/request.ts';

/**
 * 登录
 * @param data - 请求数据
 */
export function login(data: LoginData) {
  return request.post<LoginResult>('/system/user/login', data);
}
