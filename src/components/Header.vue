<template>
  <div id="Header" class="flex-between">
    <Breadcrumb />

    <div class="flex-center">
      <el-input placeholder="请输入内容" v-model="searchValue" clearable prefix-icon="el-icon-search"></el-input>
      <el-dropdown>
        <span class="el-dropdown-link">
          <div class="flex-flex-center">
            <span class="userName">{{$store.state.userInfo == null ? '未登录' : $store.state.userInfo.name}}</span>
            <el-avatar shape="square" size="large" :src="$store.state.userInfo == null ? noAvatar : $store.state.userInfo.avatar"></el-avatar>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><p @click="logout">退出登录</p></el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@/components/Breadcrumb';
  export default {
    name: "Header",
    data() {
      return {
        breadList: [],
        noAvatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        searchValue: ''
      }
    },
    components: {
      Breadcrumb
    },
    methods: {
      logout() {
        this.$store.commit('saveUserInfo', null);
        localStorage.setItem('userInfo', null);
        this.$router.push('/login');
      },
    }
  }
</script>

<style lang="less" scoped>
  #Header{
    height: 100%;
    padding: 0 20px;
    background-color: #7778EE;
    .userName{
      padding-right: 10px;
      color: #FFFFFF;
    }
    .el-dropdown{
      margin-left: 10px;
      flex: 0 0 auto;
    }
  }
  
  /* fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.28s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
