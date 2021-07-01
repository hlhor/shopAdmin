<template>
  <div id="Aside">
    <el-menu default-active="/" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="/">
        <i class="iconfont icon-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/goods">
        <template slot="title">
          <i class="iconfont icon-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goods/goodsList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>商品列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/goods/addGoods">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>新增商品</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/shop">
        <template slot="title">
          <i class="iconfont icon-shop"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/shop/shopList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>店铺列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/shop/addShop">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>新增店铺</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/user">
        <template slot="title">
          <i class="iconfont icon-people"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user/userList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>用户列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/user/userSource">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>来源分析</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/ranking">
        <i class="iconfont icon-upstage"></i>
        <span slot="title">销量排行</span>
      </el-menu-item>
      <el-submenu index="/achievement">
        <template slot="title">
          <i class="iconfont icon-medal"></i>
          <span>业绩管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/achievement/achievementList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>业绩列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/achievement/distribution">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>业绩分配</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/delivery">
        <i class="iconfont icon-deliver"></i>
        <span slot="title">配送管理</span>
      </el-menu-item>
      <el-submenu index="/order">
        <template slot="title">
          <i class="iconfont icon-text"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/orderList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>订单列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/order/addOrder">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>新增订单</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/activity">
        <template slot="title">
          <i class="iconfont icon-activity"></i>
          <span>活动管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/activity/activityList">
            <template slot="title">
              <i class="iconfont icon-list"></i>
              <span>活动列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/activity/addActivity">
            <template slot="title">
              <i class="iconfont icon-roundadd"></i>
              <span>新增活动</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    handleSelect(key) {
      this.$router.push({
        path: key,
        params: { data: 'query' }
      })
    }
  }
}
</script>

<style lang="less">
  #Aside{
    height: 100%;
    .el-menu{
      height: 100%;
      border: none;
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
      .el-menu-item{
        span{
          user-select: none;
        }
      }
    }
  }
</style>
