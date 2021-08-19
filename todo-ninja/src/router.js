import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Projects from './views/Projects'
import Teams from './views/Teams'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
   {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },    {
      path: '/Teams',
      name: 'Teams',
      component: Teams
    }
  ]
})
