<template>
  <div class="page-container homePage">
    <section class="contentTop flex">
      <div class="contentLeft">
        <div class="statistic flex-between-center">
          <div class="item flex-flex-center" v-for="(item, index) in pageData.statistic" :key="index">
            <div class="icon flex-center-center"><i class="iconfont" :class="item.icon"></i></div>
            <div class="content">
              <p class="value flex-flex-baseline">
                <a>{{ item.value }}</a>
                <s>{{ item.unit }}</s>
                <span class="flex-flex-center" :class="item.isDown ? 'isFalling' : 'isRising'">
                  <i class="iconfont" :class="item.isDown ? 'icon-falling isFalling' : 'icon-rising isRising'"></i>
                  {{ item.ratio }}%
                </span>
              </p>
              <p class="title">{{ item.title }}</p>
            </div>
          </div>
        </div>
        <div class="chart flex-between-center">
          <div class="item">
            <div class="title cursor flex-between-center">
              <span class="titleLeft">销量走势图</span>
              <el-dropdown trigger="click" @command="handleTrend">
                <span class="el-dropdown-link">
                  {{ trendSelect }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="day">日</el-dropdown-item>
                  <el-dropdown-item command="week">周</el-dropdown-item>
                  <el-dropdown-item command="month">月</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="item">
            <div class="title cursor flex-between-center">
              <span class="titleLeft">销量占比</span>
              <el-dropdown trigger="click" @command="handleRatio">
                <span class="el-dropdown-link">
                  {{ ratioSelect }}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="day">日</el-dropdown-item>
                  <el-dropdown-item command="week">周</el-dropdown-item>
                  <el-dropdown-item command="month">月</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
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
        statistic: [
          {title: '今日销售单量', value: 358298, unit: '单', ratio: '3.2', icon: 'icon-dingdan', isDown: false},
          {title: '今日销售总价', value: 27492047.00, unit: '元', ratio: '5.9', icon: 'icon-renminbi', isDown: false},
          {title: '今日点击量', value: 3928324, unit: '次', ratio: '2.7', icon: 'icon-dianji', isDown: true},
        ],
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
      },
      trendSelect: '日', // 走势图选项
      ratioSelect: '日', // 占比图选项
    }
  },
  mounted() {
    let time = this.$Sa.getDateTime(1295259403000, 'YY-MM-DD hh:mm:ss');
    console.log(time)
  },
  methods: {
    handleTrend(command) {
      switch (command) {
        case 'day':
          this.trendSelect = '日';
          break;
        case 'week':
          this.trendSelect = '周';
          break;
        case 'month':
          this.trendSelect = '月';
          break;
        default:
          break;
      }
    },
    handleRatio(command) {
      switch (command) {
        case 'day':
          this.ratioSelect = '日';
          break;
        case 'week':
          this.ratioSelect = '周';
          break;
        case 'month':
          this.ratioSelect = '月';
          break;
        default:
          break;
      }
    }
  },
}
</script>
