import Vue from 'vue'
import VueRouter from 'vue-router'
import EmoHome from '@/views/home/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: EmoHome,
    meta: {
      title: '首页'
    }
  },
  // {
  //   path: '/layout',
  //   name: 'layout',
  //   component: () => import('@/components/layout/index.vue'),
  //   meta: {
  //     title: '布局'
  //   }
  // },
  {
    path: '/tuanzhang',
    name: 'tuanzhang',
    component: () => import('@/views/tuanzhang/index'),
    meta: {
      title: '团长管理'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index'),
    meta: {
      title: '用户管理'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order/index'),
    meta: {
      title: '订单管理'
    }
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('@/views/delivery/index'),
    meta: {
      title: '骑手管理'
    }
  },
  {
    path: '/wuliu',
    name: 'wuliu',
    component: () => import('@/views/wuliu/index'),
    meta: {
      title: '货流管理'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/brokerage/index'),
    meta: {
      title: '商铺管理'
    }
  },
  {
    path: '/brokerage',
    name: 'brokerage',
    component: () => import('@/views/brokerage/index'),
    meta: {
      title: '佣金管理'
    }
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('@/views/statistic/index'),
    meta: {
      title: '统计'
    }
  },
  {
    path: '/setting',
    name: '/setting',
    component: () => import('@/views//setting/index'),
    meta: {
      title: '设置'
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
