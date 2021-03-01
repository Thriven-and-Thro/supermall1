import Vue from 'vue'
import VueRouter from 'vue-router'

/* 2.路由映射 */
const Home = () => import('views/home/home.vue')
const Notice = () => import('views/notice/notice.vue')
const Profile = () => import('views/profile/profile.vue')
const Mine = () => import('views/mine/mine.vue')
const Detail = () => import('views/detail/Detail.vue')

Vue.use(VueRouter);

/* 1.加载路由 */
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/notice',
    component: Notice
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
