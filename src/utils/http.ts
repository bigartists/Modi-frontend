import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { BASE_HOST, BASE_API_URL, APP_TOKEN } from '@/globalConstants'
import { APIResponse } from '@/types'
const baseURL = BASE_API_URL

export const instance = axios.create({
  baseURL,
  validateStatus(status) {
    return status < 400 // 约束http status<400 的进入resolved
  },
})

instance.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(response => {
  refreshToken(response)
  return response
})

function getToken() {
  return localStorage.getItem(APP_TOKEN)
}

function refreshToken(response: AxiosResponse) {
  const token =
    response.data && response.data.header && response.data.header.token
  if (token) {
    setToken(token)
  }
}

function setToken(token: string) {
  localStorage.setItem(APP_TOKEN, token)
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export function removeToken() {
  localStorage.removeItem(APP_TOKEN)
  instance.defaults.headers.common.Authorization = ''
  delete instance.defaults.headers.common.Authorization
}

function syncToken(e: StorageEvent) {
  const { key, newValue } = e
  if (key === APP_TOKEN && newValue) {
    instance.defaults.headers.common.Authorization = `Bearer ${newValue}`
  }
  if (!newValue) {
    delete instance.defaults.headers?.common?.Authorization
  }
}

window.addEventListener('storage', syncToken)

export function request<T>(
  url: string | AxiosRequestConfig,
  config?: AxiosRequestConfig,
  extra?: {
    onFulfilled?: (
      value: AxiosResponse<any>,
    ) => APIResponse<T> | Promise<APIResponse<T>>
    onRejected?: (error: any) => any
  },
): Promise<APIResponse<T>> {
  const defaultFulfilled = (response: any) => response.data as APIResponse<T>
  const defaultRejected = (error: any) => {
    console.log('defaultRejected')
    throw ErrorMessage(error)
  }

  const axiosPromise =
    typeof url === 'string' ? instance(url, config) : instance(url)

  return axiosPromise
    .then(
      extra?.onFulfilled || defaultFulfilled, // 如果传入了onFulfilled，就用传入的，否则用默认的
      unAuthorizationErrorHandler,
    )
    .catch(extra?.onRejected || defaultRejected)

  // return axiosPromise.then(response => response.data as APIResponse<T>)
}

function ErrorMessage(error: any) {
  if (error?.response) {
    return error?.response?.data?.message
  }
  return error
}

function unAuthorizationErrorHandler(error: any) {
  if (error?.response?.status === 401) {
    console.log('401 error, redirect to login page.')
    removeToken()
    window.location.href = '/login'
  }
  console.log('unAuthorizationErrorHandler', error)
  throw error
}
