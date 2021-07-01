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
        // matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
        matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched);
      }
      this.breadList = matched.filter(item => item.meta && item.meta.title);
    },
    isHome(route) {
      const name = route && route.name;
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
}
</script>