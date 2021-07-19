<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadList" :key="item.path">
        <span class="no-redirect">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
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
        const first = matched[0];
        if (!this.isHome(first)) {
          matched = [{ path: '/index', meta: { title: '首页' }}].concat(matched);
        }
        this.breadList = matched.filter(item => item.meta && item.meta.title);
        this.log({title: '', value: this.breadList})
      },
      isHome(route) {
        const path = route.path;
        if (!path) {
          return false
        }
        return path === ''
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
  .no-redirect{
    color: #FFFFFF !important;
  }
</style>