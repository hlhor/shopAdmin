<template>
  <div id="Header" class="flex-between-center">
    <Breadcrumb />

    <div class="flex-center-center">
      <el-input placeholder="请输入内容" v-model="searchValue" clearable prefix-icon="el-icon-search"></el-input>
      <div class="handle flex-flex-center">
        <el-badge value="2" class="item cursor">
          <i class="iconfont icon-xiaoxizhongxin"></i>
        </el-badge>
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <div class="flex-flex-center">
            <span class="userName">{{$store.state.userInfo == null ? '未登录' : $store.state.userInfo.name}}</span>
            <el-avatar shape="square" size="large" :src="$store.state.userInfo == null ? noAvatar : $store.state.userInfo.avatar"></el-avatar>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>选择1</el-dropdown-item>
          <el-dropdown-item>选择2</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          <el-dropdown-item disabled>无法点击</el-dropdown-item>
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
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout();
            break;
          default:
            break;
        }
      },
      logout() {
        this.$store.commit('saveUserInfo', null);
        localStorage.setItem('userInfo', null);
        this.$router.push('/login');
      }
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
    .handle{
      .item{
        margin: 0 10px;
        .iconfont{
          width: 24px;
          height: 24px;
          font-size: 28px;
          color: #FFFFFF;
        }
      }
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
