<template>
  <div class="page-container homePage">
    <section class="contentTop flex">
      <div class="contentLeft"></div>
      <div class="contentRight"></div>
    </section>
    <section class="contentCenter">
      <p class="title">待处理事务</p>
      <div class="work flex flex-wrap">
        <p class="item flex-between-center cursor" v-for="(item, index) in pageData.work" :key="index">
          <span class="subTitle">{{ item.title }}</span>
          <span class="value">({{ item.value }})</span>
        </p>
      </div>
    </section>
    <section class="contentBottom flex">
      <div class="goodsView">
        <p class="title">商品总览</p>
        <div class="flex-around-center">
          <p class="flex-center-center flex-col">
            <span class="value">100</span>
            <span class="subTitle">已下架</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">100</span>
            <span class="subTitle">已上架</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">100</span>
            <span class="subTitle">库存紧张</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">600</span>
            <span class="subTitle">全部商品</span>
          </p>
        </div>
      </div>
      <div class="memberView">
        <p class="title">会员总览</p>
        <div class="flex-around-center">
          <p class="flex-center-center flex-col">
            <span class="value">1000</span>
            <span class="subTitle">今日新增</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">996</span>
            <span class="subTitle">昨日新增</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">2000</span>
            <span class="subTitle">本月新增</span>
          </p>
          <p class="flex-center-center flex-col">
            <span class="value">15000</span>
            <span class="subTitle">会员总数</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      pageData: {
        work: [
          {title: '待付款订单', value: 17},
          {title: '已完成订单', value: 17},
          {title: '待确认收货订单', value: 17},
          {title: '待发货订单', value: 17},
          {title: '缺货登记', value: 17},
          {title: '退款申请', value: 17},
          {title: '已发货订单', value: 17},
          {title: '退货订单', value: 17},
          {title: '广告位即将到期', value: 17},
        ]
      }
    }
  },
}
</script>
