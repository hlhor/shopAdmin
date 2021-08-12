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
          <div class="item flex-col">
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
            <div id="trendCharts"></div>
          </div>
          <div class="item flex-col">
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
            <div id="ratioCharts"></div>
          </div>
        </div>
      </div>
      <div class="contentRight flex-col">
        <div class="title cursor flex-between-center">
          <span class="titleLeft">销量排行榜</span>
          <el-dropdown trigger="click" @command="handleRank">
            <span class="el-dropdown-link">
              {{ rankSelect }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="day">日</el-dropdown-item>
              <el-dropdown-item command="week">周</el-dropdown-item>
              <el-dropdown-item command="month">月</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="rankList">
          <div class="item flex-flex-center" v-for="(item, index) in rankList" :key="index">
            <div class="rank flex-center-center">
              <img v-if="index <= 2" :src="require('../../assets/images/home/rank' + index + '.png')" />
              <p v-else>{{ index + 1 }}</p>
            </div>
            <div class="info">
              <div class="goods flex-between-baseline">
                <span class="name ellipsis">{{ item.name }}</span>
                <span class="sales">{{ item.sales }} / {{ item.unit }}</span>
              </div>
              <div class="progress" :style="{width: item.width}"></div>
            </div>
          </div>
        </div>
      </div>
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
        rankSelect: '日', // 排行榜选项
        rankList: [
          {name: '牙刷', sales: 10257, unit: '支'},
          {name: '卫龙大辣条', sales: 8423, unit: '包'},
          {name: '方便面', sales: 6048, unit: '桶'},
          {name: '可口可乐', sales: 5710, unit: '瓶'},
          {name: '百事可乐', sales: 4444, unit: '瓶'},
          {name: '火腿肠', sales: 4068, unit: '根'},
          {name: '纸巾', sales: 1048, unit: '包'},
          {name: '打火机', sales: 592, unit: '个'}
        ]
      }
    },
    created() {
      this.progressWidth();
    },
    mounted() {
      this.drawEcharts();
    },
    methods: {
      drawEcharts(){
        let trendCharts = this.$echarts.init(document.getElementById('trendCharts'));
        let ratioCharts = this.$echarts.init(document.getElementById('ratioCharts'));
        trendCharts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
        ratioCharts.setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: 0,
            left: 'center',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      },
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
      },
      handleRank(command) {
        switch (command) {
          case 'day':
            this.rankSelect = '日';
            break;
          case 'week':
            this.rankSelect = '周';
            break;
          case 'month':
            this.rankSelect = '月';
            break;
          default:
            break;
        }
      },
      progressWidth() {
        let rankList = this.rankList;
        rankList[0]['width'] = '340px';
        // rankList.forEach(item => {
          
        // })
      }
    }
  }
</script>
