import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/api/articles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: null
  },
  mutations: {
    GET_ARTICLES (state) {
      // console.log('articlesList ', api.articles)
      state.articles = api.articles
    }
  },
  actions: {
    GET_ARTICLES ({ commit }) {
      commit('GET_ARTICLES')
    }
  },
  modules: {
  },
  getters: {
    getArticles: state => state.articles,
    getArticleById: state => {
      return artId => {
        // console.log(artId)
        // console.log(state.articles[0].id)
        // console.log(typeof state.articles[0].id)
        return state.articles.find(article => article.id === artId)
      }
    }
  }
})
