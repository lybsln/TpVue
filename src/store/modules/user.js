import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },

  actions: {
    // 用户名登录
    async LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      // return new Promise((resolve, reject) => {
      //   loginByUsername(username, userInfo.password).then(response => {
      //     const data = response.data.data
      //     commit('SET_TOKEN', data.token)
      //     setToken(data.token)
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      const result = await loginByUsername(username, userInfo.password)
      const info = result.data
      if (info.code === 0) {
        commit('SET_TOKEN', info.data.token)
        setToken(info.data.token)
        return true
      }
      return false
    },

    // 获取用户信息
    async GetUserInfo({ commit, state }) {
      const result = await getUserInfo(state.token)
      const info = result.data
      if (info.code === 0) {
        commit('SET_NAME', info.data.name)
        commit('SET_AVATAR', info.data.avatar)
        commit('SET_INTRODUCTION', info.data.intro)
        return info
      }
      return false
      // return new Promise((resolve, reject) => {
      //   getUserInfo(state.token).then(response => {
      //     if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
      //       reject('error')
      //     }
      //     const data = response.data.data
      //     commit('SET_ROLES', data.roles)
      //     commit('SET_NAME', data.name)
      //     commit('SET_AVATAR', data.avatar)
      //     commit('SET_INTRODUCTION', data.introduction)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
