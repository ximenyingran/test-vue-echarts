import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: 'Login',
    redirect: '/Login',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: () => import('../components/HelloWorld.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.brforeEach((to, from, next) => {
//   var isLogin = Boolean(store.state.user.id)
//   if (!isLogin && (to.path !== '/Login')) {
//     return next({path: '/Login'})
//   }
//   next()
// })

export default router
