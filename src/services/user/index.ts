import { rebootSignalr, requestWithFetch, requestWithSignalr } from 'src/services/internal/request'
import { PATH } from 'src/services/path'
import { longTermToken, sessionToken } from 'src/utils/session'
import * as Types from './type'

/** 登录 */
export async function login(email: string, password: string, token: string) {
  const res = await requestWithFetch<Types.Login.Res, Types.Login.Param>(PATH.USER_LOGIN, {
    payload: { email, password, token }
  })

  // 记录到全局变量中, 方便其它业务取值
  sessionToken.set(res.Token)

  // 记录到DB缓存中, 方便下次会话使用它来换取token
  await longTermToken.set(res.RefreshToken)

  // 重启链接
  await rebootSignalr()

  // 触发一次请求, 连接ws服务
  // 登录就是为了连接ws服务, 连接失败的话等于没有登录
  // 所以这里await
  const myInfo = await getMyInfo()

  return [res, myInfo]
}

/** 换取会话密钥 */
export async function refreshToken(longTermToken: string) {
  const token = await requestWithFetch<Types.RefreshToken.Res, Types.RefreshToken.Param>(PATH.USER_REFRESH_TOKEN, {
    payload: { token: longTermToken }
  })

  /** 刷新成功后自动更新会话密钥 */
  if (token) {
    sessionToken.set(token)
  }

  return token
}

/** 获取用户信息 */
export async function getMyInfo() {
  return requestWithSignalr('GetMyInfo')
}
