<template>
  <div class="loginPage flex-between-center">
    <main class="loginBox flex">
      <section class="swiperBox">
        <swiper class="swiper" ref="mySwiper" :options="bannerOptions">
            <swiper-slide v-for="(item, index) in bannerData" :key="index">
              <el-image class="bannerItem" :alt="item.name" :src="item.url" lazy fit="cover"></el-image>
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <section class="login">
        <h1>电商管理后台系统</h1>
        <el-input class="accountInput" placeholder="请输入账号" prefix-icon="el-icon-user" v-model="formData.name" clearable></el-input>
        <el-input class="accountInput" placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="formData.password" show-password clearable></el-input>
        <section class="flex-end-center">
          <button @click="login">登录</button>
          <button>注册</button>
        </section>
        <div id="he-plugin-standard"></div>
      </section>
    </main>
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
        }, // 提交数据
        bannerOptions: {
          pagination: {
            el: ".swiper-pagination"
          }
        }, // 轮播设置
        bannerData: [
          {
            url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            name: '轮播一'
          },
          {
            url: 'https://tenfei05.cfp.cn/creative/vcg/veer/800water/veer-302244659.jpg',
            name: '轮播二'
          },
          {
            url: require('@/assets/images/common/background.png'),
            name: '轮播三'
          }
        ], // 模拟轮播数据
      }
    },
    created() {
      window.WIDGET = {
        "CONFIG": {
          "layout": "2",
          "width": 230,
          "height": 270,
          "background": "1",
          "dataColor": "FFFFFF",
          "borderRadius": "5",
          "key": "dea255ad8a1d449c8ae8192006a5f3c6"  //这里换成自己的key！
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

<style lang="less" scoped>
  .loginPage{
    height: 100%;
    padding: 0 300px;
    background-image: linear-gradient(to right, rgb(26, 53, 158), rgb(18, 80 ,205));
    .loginBox{
      width: 1200px;
      height: 600px;
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      overflow: hidden;
      .login{
        width: 500px;
        height: 100%;
        padding: 24px;
        .accountInput{
          margin-bottom: 20px;
        }
      }
      .swiperBox{
        width: 700px;
        height: 100%;
        background-color: #1982c4;
        .swiper{
          height: 100%;
          .bannerItem{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>