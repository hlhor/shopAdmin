<template>
  <div id="Aside">
    <div class="logo">
      <el-image :src="logo" fit="contain"></el-image>
    </div>

    <el-menu :router="true" default-active="/" background-color="#0F132E" text-color="#FFFFFF" active-text-color="#FFD04B">
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
        console.log('路由==',this.$router.options.routes)
        return this.$router.options.routes
      },
    },
    methods: {
      
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
      position: sticky;
      top: 0;
      z-index: 50;
      /deep/ .el-image{
        width: 100%;
        height: 100%;
      }
    }
    /deep/ .el-menu{
      height: calc(100% - 120px);
      border: none;
      user-select: none;
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
