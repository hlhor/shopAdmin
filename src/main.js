import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入iconfont
import "./assets/iconfont/iconfont.css";
// 重置样式
import 'normalize.css/normalize.css';
import '@/style/index.less';

// 引入element-Ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default options with global component } */);

// 引入全局方法
import Sa from '@/utils/commonFun.js';
Vue.prototype.$Sa = Sa;

// 引入全局组件
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import Main from '@/components/Main';
Vue.component('Header', Header);
Vue.component('Aside', Aside);
Vue.component('Main', Main);

/*
  描述：打印
  {
    title: console标题
    val: console值
  }
*/
Vue.prototype.log = function(val){
  return console.log(`${val.title ? val.title : '打印结果'}=====`, val.value)
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
