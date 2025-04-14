declare module 'axios' {
  export interface AxiosRequestConfig {
    url?: string
    method?: string
    baseURL?: string
    headers?: Record<string, string>
    params?: any
    data?: any
  }
  
  export interface AxiosResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: Record<string, string>
    config: AxiosRequestConfig
  }
  
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
  }
  
  export function create(config?: AxiosRequestConfig): AxiosInstance
  
  const axios: AxiosInstance
  export default axios
} 