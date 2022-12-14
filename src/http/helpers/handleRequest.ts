import type { AxiosError, AxiosRequestConfig } from "axios";
import type { HttpType } from "@/types/httpType";

export function handleRequestResolve(config: AxiosRequestConfig) {
  return config;
}
export function handleRequestReject(
  error: AxiosError
): Promise<HttpType.ErrorInfo> {
  const errorInfo: HttpType.ErrorInfo = { msg: error.message };
  //TODO Toast
  return Promise.reject(errorInfo);
}
