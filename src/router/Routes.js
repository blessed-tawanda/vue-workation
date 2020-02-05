import VueRouter  from 'vue-router'
import MainPage from '../components/MainPage'
import SplashPage from '../components/SplashPage'

const routes = [
  {
    path: '/',
    component: SplashPage,
  },
  {
    path: '/home',
    component: MainPage
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})