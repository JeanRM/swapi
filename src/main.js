import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
