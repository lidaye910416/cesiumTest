import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue')
  },
  
  /** 添加一个页面 **/
 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
