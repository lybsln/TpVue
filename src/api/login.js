import http from '@/utils/http.js'

export function login() {
  return http.post('/admin/test/one', null)
}
