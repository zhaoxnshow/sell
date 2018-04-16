import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JwtLogin from '@/components/JwtLogin'
import JwtFilter from '@/components/JwtFilter'
import JwtLogout from '@/components/JwtLogout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jwt/login',
      name: 'JwtLogin',
      component: JwtLogin
    },
    {
      path: '/jwt/logout',
      name: 'JwtLogout',
      component: JwtLogout
    },
    {
      path: '/jwt/filter',
      name: 'JwtFilter',
      component: JwtFilter
    }
  ]
})
