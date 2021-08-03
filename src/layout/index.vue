<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
  .app-wrapper{
    height: 100vh;
    display: flex;
  }
  .el-header{
    padding: 0;
    border-bottom: 1px solid #EEEEEE;
    // box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    // box-shadow: 0px 0px 10px #EEEEEE;
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
