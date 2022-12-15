import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import defaultConfig from "./helpers/defaultConfig";
import { handleRequestReject, handleRequestResolve } from "./helpers/handleRequest";
import { handleResponseReject, handleResponseResolve } from "./helpers/handleResponse";

export class Http {
  readonly service: AxiosInstance;
  constructor(config: AxiosRequestConfig = defaultConfig) {
    this.service = axios.create({
      ...config,
    });
    // 请求拦截
    this.service.interceptors.request.use(handleRequestResolve, handleRequestReject);
    // 响应拦截
    this.service.interceptors.response.use(handleResponseResolve, handleResponseReject);
  }
  async post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<HttpType.ResultData<T>> {
    return this.service.post(url, data, config).then((res) => res.data);
  }
  async get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<HttpType.ResultData<T>> {
    return this.service.get(url, { params, ...config }).then((res) => res.data);
  }
  async delete<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<HttpType.ResultData<T>> {
    return this.service.delete(url, { params, ...config }).then((res) => res.data);
  }
}
export const httpInstance = new Http();
