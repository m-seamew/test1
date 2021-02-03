export const state = () => ({
  isMobile: true,
})

export const mutations = {
  changeIsMobile (state, payload){
    state.isMobile = payload;
  }
}

export const actions = {
  changeIsMobile({ commit }, value) {  
    commit('changeIsMobile', value);
  }
}

export const getters = {
  getIsMobile: (state) =>  {
    return state.isMobile;
  }
}