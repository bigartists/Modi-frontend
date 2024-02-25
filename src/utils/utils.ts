import { AxiosError } from 'axios'

export function errorHandle(error: any) {
  if (error?.response) {
    // AxiosError
    const { response } = error as AxiosError
    switch (response?.status) {
      case 401:
        console.error({ key: '401', content: '401' })

        break
      case 400:
        console.error(response?.statusText)
        break
      default:
        console.error(response?.statusText || error.message)
        break
    }
  } else if (error?.message) {
    // Error
    console.error({
      content: error.message,
      duration: 2,
    })
  } else {
    console.error({
      content: error,
      duration: 2,
    })
  }
  return error
}
