import Vue from 'vue'
import Vuetify from 'vuetify'
// import ru from 'vuetify/es5/locale/ru'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  // theme: {
  //   options: {
  //     customProperties: true
  //   }
  // },
  // lang: {
  //   locales: { ru },
  //   current: 'ru'
  // },
  // icons: {
  //   iconfont: 'mdi'
  // }
}

export default new Vuetify(opts)
