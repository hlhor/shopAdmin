<template>
  <div v-if="!item.hidden">

    <el-menu-item v-if="item.children == null || item.children.length <= 1" :index="item.path">
      <i :class="'iconfont ' + item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i :class="'iconfont ' + item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <MenuItem v-for="child in item.children" :key="child.path" :item="child" />
    </el-submenu>
  </div>
</template>
<script>
  export default {
    props: ['item'],
    name: 'MenuItem',
  }
</script>