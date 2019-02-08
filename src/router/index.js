import Vue from 'vue'
import Router from 'vue-router'
import Lembrete from '@/components/Filme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Livros',
      component: Lembrete
    }
  ]
})
