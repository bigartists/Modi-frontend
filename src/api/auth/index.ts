import { request } from '@/utils/http'

export const login = async (email: string, password: string) => {
  return request('/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
}
