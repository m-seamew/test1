export const state = () => ({
  loading: true,
})

export const mutations = {
  changeLoading (state, payload){
    state.loading = payload;
  }
}

export const actions = {
  changeLoading({ commit }, bool) {  
    commit('changeLoading', bool);
  }
}

export const getters = {
  getLoading: (state) =>  {
    return state.loading;
  }
}