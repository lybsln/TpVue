/*
 * @Author: Kamil
 * @Date: 2018-04-18 15:28:33
 * @Last Modified by: Kamil
 * @Last Modified time: 2018-04-18 15:50:56
 */
import http from '@/utils/http.js'

export function login() {
  return http.post('/admin/test/one', null)
}

/**
 * 用户登录
 */
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return http.post('/admin/login/login', data)
}

/**
 * 获取用户信息
 */
export function getUserInfo(token) {
  const data = {
    token
  }
  return http.post('/admin/login/userInfo', data)
}

/**
 * 退出登录
 */
export function logout() {
  return http.post('/admin/login/logout', null)
}

