<template>
  <div id="Aside">
    <div class="logo">
      <el-image :src="logo" fit="contain"></el-image>
    </div>

    <el-menu :router="true" default-active="/" background-color="#0F132E" text-color="#FFFFFF" active-text-color="#FFFFFF" @select="select">
      <MenuItem v-for="(item, index) in routes" :key="index" :item="item" />
    </el-menu>
  </div>
</template>

<script>
  import MenuItem from './MenuItem';
  export default {
    name: "Aside",
    components: {
      MenuItem
    },
    data() {
      return {
        logo: require('@/assets/logo.png'),
      }
    },
    computed: {
      routes(){
        return this.$router.options.routes
      },
    },
    methods: {
      select(e){
        this.log({value: e})
        localStorage.setItem('token', '测试token')
      },
    }
  }
</script>

<style lang="less" scoped>
  #Aside{
    height: 100%;
    background-color: #0F132E;
    .logo{
      height: 120px;
      padding: 10px 0;
      background-color: #0F132E;
      /deep/ .el-image{
        width: 100%;
        height: 100%;
      }
    }
    /deep/ .el-menu{
      height: calc(100% - 120px);
      border: none;
      user-select: none;
      .el-menu-item.is-active{
        &::before{
          content: '';
          width: 5px;
          height: 100%;
          background-color: #7678ED;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
        }
        background-color: #2A2D60 !important;
      }
      .el-menu-item-group__title{
        padding: 0;
      }
      .iconfont{
        width: 24px;
        margin-right: 5px;
        font-size: 18px;
        text-align: center;
        display: inline-block;
      }
    }
  }
</style>
