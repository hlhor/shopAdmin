import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter)

/* 解决相同路径跳转报错 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 引入Layout
import Layout from '@/layout';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/account/login'),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/account/register'),
    hidden: true,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { 
      title: '首页',
      icon: 'icon-home',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          requireAuth: true,
        },
      }
    ]
  },
  //  商品管理
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goodsList',
    meta: { 
      title: '商品管理',
      icon: 'icon-packaging'
    },
    children: [
      {
        path: '/goods/goodsList',
        name: 'GoodsList',
        component: () => import('@/views/goods/goodsList'),
        meta: {
          title: '商品列表',
          requireAuth: true
        }
      },
      {
        path: '/goods/addGoods',
        name: 'AddGoods',
        component: () => import('@/views/goods/addGoods'),
        meta: {
          title: '新增商品',
          requireAuth: true
        }
      },
    ]
  },
  //  订单管理
  {
    path: '/order',
    component: Layout,
    redirect: '/order/orderList',
    meta: { 
      title: '订单管理',
      icon: 'icon-order'
    },
    children: [
      {
        path: '/order/orderList',
        name: 'OrderList',
        component: () => import('@/views/order/orderList'),
        meta: {
          title: '订单列表',
          requireAuth: true
        }
      },
      {
        path: '/order/addOrder',
        name: 'AddOrder',
        component: () => import('@/views/order/addOrder'),
        meta: {
          title: '新增订单',
          requireAuth: true
        }
      },
    ]
  },
  //  内容管理
  {
    path: '/content',
    component: Layout,
    redirect: '/content/banner',
    meta: { 
      title: '内容管理',
      icon: 'icon-feeds'
    },
    children: [
      {
        path: '/content/banner',
        name: 'Banner',
        component: () => import('@/views/content/banner'),
        meta: { 
          title: '轮播设置',
          requireAuth: true
        },
      }
    ]
  },
  //  店铺管理
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/shopList',
    meta: {
      title: '店铺管理',
      icon: 'icon-store'
    },
    children: [
      {
        path: '/shop/shopList',
        name: 'ShopList',
        component: () => import('@/views/shop/shopList'),
        meta: {
          title: '店铺列表',
          requireAuth: true
        }
      },
      {
        path: '/shop/addShop',
        name: 'AddShop',
        component: () => import('@/views/shop/addShop'),
        meta: {
          title: '店铺新增',
          requireAuth: true
        }
      },
    ]
  },
  //  权限管理
  {
    path: '/power',
    component: Layout,
    redirect: '/power/powerList',
    meta: { 
      title: '权限管理',
      icon: 'icon-security'
    },
    children: [
      {
        path: '/power/powerList',
        name: 'PowerList',
        component: () => import('@/views/power/powerList'),
        meta: {
          title: '权限列表',
          requireAuth: true
        }
      },
    ]
  },
  //  会员管理
  {
    path: '/member',
    component: Layout,
    redirect: '/member/memberList',
    meta: { 
      title: '会员管理',
      icon: 'icon-vip'
    },
    children: [
      {
        path: '/member/memberList',
        name: 'MemberList',
        component: () => import('@/views/member/memberList'),
        meta: {
          title: '会员列表',
          requireAuth: true
        }
      },
      {
        path: '/member/memberActivity',
        name: 'MemberActivity',
        component: () => import('@/views/member/memberActivity'),
        meta: {
          title: '会员活动',
          requireAuth: true
        }
      },
    ]
  },
  //  系统管理
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/index',
    meta: { 
      title: '系统管理',
      icon: 'icon-set'
    },
    children: [
      {
        path: '/setting/index',
        name: 'Setting',
        component: () => import('@/views/setting/index'),
        meta: {
          title: '系统管理',
          requireAuth: true
        },
      }
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
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// 路由前置导航守卫
router.beforeEach((to, from, next) => {
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
