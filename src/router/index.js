import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Love from '../views/Love.vue'
import Playlist from '../views/Playlist.vue'
import Play from '../views/Playlist.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/home', component: Home, redirect: '/' },
  { path: '/video', component: Video },
  { path: '/love', component: Love },
  { path: '/playlist', component: Playlist },
  { path: '/play', component: Play },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
