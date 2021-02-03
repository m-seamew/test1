export const state = () => ({
  stat: {},
})

export const mutations = {
  changeStat (state, payload){
    state.stat = payload;
  }
}

export const actions = {
  changeStat({ commit }, snap) {  
    commit('changeStat', snap);
  }
}

export const getters = {
  getStat: (state) =>  {
    return state.stat;
  }
}