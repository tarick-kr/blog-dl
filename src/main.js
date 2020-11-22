import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/styles.sass'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

store.dispatch('GET_ARTICLES').then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
