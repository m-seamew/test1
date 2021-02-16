export const state = () => ({
  hash: '',
})

export const mutations = {
  changeHash (state, payload){
    state.hash = payload;
  }
}

export const actions = {
  changeHash({ commit }, hash) {  
    commit('changeHash', hash);
  }
}

export const getters = {
  getHash: (state) =>  {
    return state.hash;
  }
}