import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogPage from '../views/catalogPage'
import WorkList from '../views/workList'
import WorkDetail from '../views/workDetail'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'catalog', component: CatalogPage },
  { path: '/workList', name: 'workList', component: WorkList },
  { path: '/workDetail', name: 'workDetail', component: WorkDetail }
]

const router = new VueRouter({ mode: 'history', routes })

export default router
