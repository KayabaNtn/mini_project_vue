import Vuex from 'vuex'
import CurrentUser from './currentUser'

const store = new Vuex.Store({
  modules: {
    CurrentUser,
  },
})

export default store
