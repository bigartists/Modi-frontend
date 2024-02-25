import { request } from '@/utils/http'

export const getUsers = async () => {
  return request('/users', {
    method: 'GET',
  })
}
