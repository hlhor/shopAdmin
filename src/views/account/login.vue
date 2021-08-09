<template>
  <div class="loginPage flex-between-center">
    <section class="loginLeft flex-col flex-between">
      <div class="plugin flex-between-center">
        <div class="time flex-around flex-col">
          <h3 class="date">{{ strTime }}</h3>
          <h5 class="greet">{{ greet }}</h5>
          <h5 class="tips">{{ tips }}</h5>
        </div>
        <div id="he-plugin-standard"></div>
      </div>
      <swiper class="swiper adBanner" :options="bannerOptions">
        <swiper-slide class="bannerItem" v-for="(item, index) in bannerData" :key="index">
          <el-image class="bannerItem" :alt="item.name" :src="item.url" lazy fit="cover"></el-image>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="loginRight flex-col flex-flex-center">
      <h1 class="system">ShopAdmin后台系统</h1>
      <el-input class="label" placeholder="请输入帐号/手机号" v-model="formData.name" prefix-icon="iconfont icon-account"></el-input>
      <el-input class="label" placeholder="请输入密码" v-model="formData.password" type="password" prefix-icon="iconfont icon-password"></el-input>
      <div class="handle flex-center">
        <el-button @click="login">登录</el-button>
        <el-button>注册</el-button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        formData: {
          name: '',
          password: '',
        },
        bannerOptions: {
          spaceBetween: 30,
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          }
        },
        bannerData: [
          {
            url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            name: '轮播一'
          },
          {
            url: require('@/assets/images/common/background.png'),
            name: '轮播三'
          }
        ],
        greet: '晚上好',
        strTime: '2021年8月7日 0:48:21',
        tips: '工作虽然很忙，但也要注意休息哦~'
      }
    },
    created() {
      window.WIDGET = {
        "CONFIG": {
          "layout": "1",
          "width": "300",
          "height": "160",
          "background": "1",
          "dataColor": "FFFFFF",
          "borderRadius": "5",
          "modules": "10",
          "key": "21e836349ee84f179c3c057a8d2af995"  //这里换成自己的key！
        }
      }
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
      document.getElementsByTagName('head')[0].appendChild(script);
    },
    methods: {
      onSubmit(){},
      login(){
        let res = {
          name: '快速模板',
          avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651491545,479364374&fm=26&gp=0.jpg'
        };
        this.$store.commit('saveUserInfo', res);
        localStorage.setItem("userInfo", JSON.stringify(res));
        this.$router.push({path: '/'});
      },
    },
  }
</script>