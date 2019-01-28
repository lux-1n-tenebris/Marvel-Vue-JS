import { getSearchName } from '@/api/'

const state = {
  heroes: []
}

const getters = {
  heroes: state => { return state.heroes }
}

const mutations = {
  updateHeroes: (state, payload) => {
    state.heroes = payload
  },
  emptyHeroes: state => {
    state.heroes = []
  }
}

const actions = {
  fetchHeroes({ commit }, { name }) {
    if (name) {
      getSearchName(name)
        .then(response => {
          commit('updateHeroes', response.data.data.results)
        })
        // .catch(error => {
          // console.log(error)
        // })
    } else {
        commit('emptyHeroes')
  }
},
}

export default { state, getters, mutations, actions }
