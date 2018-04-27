/*
 * @Author: Kamil
 * @Date: 2018-04-18 15:28:33
 * @Last Modified by: Kamil
 * @Last Modified time: 2018-04-25 14:01:26
 */
import http from '@/utils/http.js'

export function routeList() {
  return http.post('/admin/router/routerList', null)
}

