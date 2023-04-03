import type { AxiosError, InternalAxiosRequestConfig } from 'axios';

export function handleRequestResolve(config: InternalAxiosRequestConfig) {
  return config;
}
export function handleRequestReject(error: AxiosError): Promise<HttpType.ErrorInfo> {
  const errorInfo: HttpType.ErrorInfo = { msg: error.message };
  //TODO Toast
  return Promise.reject(errorInfo);
}
