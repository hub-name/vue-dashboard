import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Element from '@/components/Element'
import Echart from '@/components/Echart'
import RouterTest from '@/components/Routertest'
import Layout from '@/components/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    },
    {
      path: '/a',
      name: 'Element',
      component: Element,

    },
    {
      path: '/e',
      name: 'Echart',
      component: Echart,
      children: [
        {
          path: '/r',
          name: "RouterTest",
          component: RouterTest
        }
      ]
    },
    {
      path: '/l',
      name: 'Layout',
      component: Layout,

    }
  ]
})
