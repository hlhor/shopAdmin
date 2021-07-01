import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// Layout
import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/account/login'),
    hidden: true,
    meta: {title: '登录'}
  },
  {
    path: '/register',
    component: () => import('@/views/account/register'),
    hidden: true,
    meta: {title: '注册'}
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          requireAuth: true
        }
      }
    ]
  },
  //  商品管理
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goodsList',
    children: [
      {
        path: '/goods/goodsList',
        name: 'goodsList',
        component: () => import('@/views/goods/goodsList'),
        meta: {
          title: '商品列表',
          requireAuth: true
        }
      },
      {
        path: '/goods/addGoods',
        name: 'addGoods',
        component: () => import('@/views/goods/addGoods'),
        meta: {
          title: '新增商品',
          requireAuth: true
        }
      },
    ]
  },
  //  店铺管理
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/shopList',
    children: [
      {
        path: '/shop/shopList',
        name: 'shopList',
        component: () => import('@/views/shop/shopList'),
        meta: {
          title: '店铺列表',
          requireAuth: true
        }
      },
      {
        path: '/shop/addShop',
        name: 'addShop',
        component: () => import('@/views/shop/addShop'),
        meta: {
          title: '店铺新增',
          requireAuth: true
        }
      },
    ]
  },
  //  用户管理
  {
    path: '/user',
    component: Layout,
    redirect: '/user/userList',
    children: [
      {
        path: '/user/userList',
        name: 'userList',
        component: () => import('@/views/user/userList'),
        meta: {
          title: '用户列表',
          requireAuth: true
        }
      },
      {
        path: '/user/userSource',
        name: 'userSource',
        component: () => import('@/views/user/userSource'),
        meta: {
          title: '来源分析',
          requireAuth: true
        }
      },
    ]
  },
  //  销量排行
  {
    path: '/ranking',
    component: Layout,
    redirect: '/ranking/index',
    children: [
      {
        path: '/ranking/index',
        name: 'ranking',
        component: () => import('@/views/ranking/index'),
        meta: {
          title: '销量排行',
          requireAuth: true
        }
      }
    ]
  },
  //  业绩管理
  {
    path: '/achievement',
    component: Layout,
    redirect: '/achievement/achievementList',
    children: [
      {
        path: '/achievement/achievementList',
        name: 'achievementList',
        component: () => import('@/views/achievement/achievementList'),
        meta: {
          title: '业绩列表',
          requireAuth: true
        }
      },
      {
        path: '/achievement/distribution',
        name: 'distribution',
        component: () => import('@/views/achievement/distribution'),
        meta: {
          title: '业绩分配',
          requireAuth: true
        }
      },
    ]
  },
  //  配送管理
  {
    path: '/delivery',
    component: Layout,
    redirect: '/delivery/deliveryList',
    children: [
      {
        path: '/delivery/deliveryList',
        name: 'deliveryList',
        component: () => import('@/views/delivery/deliveryList'),
        meta: {
          title: '配送列表',
          requireAuth: true
        }
      }
    ]
  },
  //  订单管理
  {
    path: '/order',
    component: Layout,
    redirect: '/order/orderList',
    children: [
      {
        path: '/order/orderList',
        name: 'orderList',
        component: () => import('@/views/order/orderList'),
        meta: {
          title: '订单列表',
          requireAuth: true
        }
      },
      {
        path: '/order/addOrder',
        name: 'addOrder',
        component: () => import('@/views/order/addOrder'),
        meta: {
          title: '新增订单',
          requireAuth: true
        }
      },
    ]
  },
  //  活动管理
  {
    path: '/activity',
    component: Layout,
    redirect: '/activity/activityList',
    children: [
      {
        path: '/activity/activityList',
        name: 'activityList',
        component: () => import('@/views/activity/activityList'),
        meta: {
          title: '活动列表',
          requireAuth: true
        }
      },
      {
        path: '/activity/addActivity',
        name: 'addActivity',
        component: () => import('@/views/activity/addActivity'),
        meta: {
          title: '新增活动',
          requireAuth: true
        }
      },
    ]
  },
  //  其他
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由前置导航守卫
router.beforeEach((to,from,next) => {
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || '商城后台管理系统';
  // 对路由进行登录验证
  if(to.matched.some( res => res.meta.requireAuth )){
    if(store.getters.userInfo != null) {
      next();
    }else{
      next({ path:'/login' });
    }
  }else{
    next();
  }
})

export default router
