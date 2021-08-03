<template>
  <div id="Breadcrumb" class="flex-flex-center">
    <div class="back flex">
      <i class="iconfont icon-home no-redirect"></i>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in breadList" :key="item.path">
          <span class="no-redirect">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb",
    data() {
      return {
        breadList: [],
      }
    },
    created(){
      this.getBreadcrumb();
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
        this.breadList = matched.filter(item => item.meta && item.meta.title);
        this.log({value: this.breadList})
      },
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    }
  }
</script>
<style lang="less" scoped>
  #Breadcrumb{
    .back{
      width: 32px;
      height: 32px;
      margin-right: 10px;
      background-color: lightcoral;
      border-radius: 50%;
      cursor: pointer;
      .iconfont{
        margin: auto;
        font-size: 20px;
      }
    }
  }
  .no-redirect{
    color: #FFFFFF !important;
  }
</style>