export default {
  namespaced: true,
  state: {
    user: {
      email: 'nhatnt@nal.com',
    },
  },
  mutations: {
    INIT_USER_INFO(state, userInfo) {
      state.user = userInfo
    },
  },
  getters: {
    user: state => state.user,
  },
}
