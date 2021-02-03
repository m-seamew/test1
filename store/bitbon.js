export const state = () => ({
  price: 0,
})

export const mutations = {
  changePrice (state, payload){
    state.price = payload;
  }
}

export const actions = {
  changePrice({ commit }, price) {  
    commit('changePrice', price);
  }
}

export const getters = {
  getPrice: (state) =>  {
    return state.price;
  }
}