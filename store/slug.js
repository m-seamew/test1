

export const state = () => ({
  slug: '',
})


export const mutations = {
  changeSlug (state, payload){
    state.slug = payload;
  }
}

export const actions = {
  changeSlug({ commit }, text) {  
    commit('changeSlug', text);
  }
}

export const getters = {
  getSlug: (state) =>  {
    return state.slug;
  }
}