import type { AxiosResponse } from "axios";
import type { HttpType } from "@/types/httpType";

const statusMap = new Map([
  [400, "请求失败！请您稍后重试"],
  [401, "登录失效！请您重新登录"],
  [403, "当前账号无权限访问！"],
  [404, "你所访问的资源不存在！"],
  [500, "服务异常！"],
  [502, "网关错误！"],
  [503, "服务不可用！"],
  [504, "网关超时！"],
]);
export function handleStatus(response: AxiosResponse): HttpType.ErrorInfo {
  const { status } = response;
  const statusText = statusMap.get(status) || "请求失败";
  return { msg: statusText };
}
