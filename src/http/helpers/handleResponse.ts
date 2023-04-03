import { handleStatus } from './handleStatus';
import type { AxiosError, AxiosResponse } from 'axios';
import { ResultCodeEnum } from './codeEnum';

// 响应成功的拦截函数
export function handleResponseResolve(res: AxiosResponse<HttpType.ResultData>) {
  const { data } = res;
  if (Object.keys(data).includes('code') && data.code !== ResultCodeEnum.SUCCESS) {
    //TODO Toast
    return Promise.reject(data);
  }
  return res;
}
// 响应错误的拦截函数
export function handleResponseReject(error: AxiosError) {
  const { response } = error;
  let errorInfo: HttpType.ErrorInfo = { msg: error.message };
  if (response) errorInfo = handleStatus(response);
  //TODO Toast
  return Promise.reject(errorInfo);
}
