import { getSearchName } from '@/api/'

const state = {
  heroes: [],
  bookmarkedHeroes: []
}

const getters = {
  heroes: state => { return state.heroes },
  bookmarkedHeroes: state => { return state.bookmarkedHeroes }
}

const mutations = {
  updateHeroes: (state, payload) => {
    state.heroes = payload
  },
  emptyHeroes: state => {
    state.heroes = []
  },
  setLocalBookmarks: (state) => {
    localStorage.setItem('localBookmarks', JSON.stringify(state.bookmarkedHeroes))
  },
  updateBookmarks: (state, payload) => {
    state.bookmarkedHeroes.push(payload)
  },
  getBookmarks: state => {
    state.bookmarkedHeroes = JSON.parse(localStorage.getItem("localBookmarks") || "[]");
  },
  emptyBookmarks: state => {
    state.bookmarkedHeroes = []
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
        //   console.log(error)
        // })
    } else {
      commit('emptyHeroes')
    }
  },
  setLocalBookmarks({ commit }) {
    commit('setLocalBookmarks')
  },
  emptyHeroes({ commit }) {
    commit('emptyHeroes')
  },
  updateBookmarks({ commit }, payload) {
    commit('updateBookmarks', payload)
  },
  getBookmarks({ commit }) {
    commit('getBookmarks')
  },
  emptyBookmarks({ commit }){
    commit('emptyBookmarks')
  }
}

export default { state, getters, mutations, actions }
