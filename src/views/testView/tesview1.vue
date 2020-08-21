<template>
  <div class="apps">
    <div ref="test1" class="test1"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class tesview1 extends Vue {
  private echarts: any;
  private mounted() {
    this.initEcharts();
  }
  private initEcharts() {
    this.echarts = (this as any).$echarts.init(this.$refs.test1, null, {
      renderer: "svg",
    });
    this.echarts.setOption(this.getoption());
    this.echarts.on("legendselectchanged", (params: any) => {
      console.log(params);
      // https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597901874825&di=12424002ca14299d4a9d863a5cb4d610&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F92%2F67%2F3456f22ec9b232d.jpg
      let option = this.getoption();
      option.legend.data.map((item) => {
        if (item.name == params.name && params.selected[params.name]) {
          item.icon =
            "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597902005557&di=5fe1e3016a39836b67003fc5c7424718&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F99%2F78%2F3156f388cebc696.jpg";
        } else if (item.name == params.name && !params.selected[params.name]) {
          item.icon =
            "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597901874825&di=12424002ca14299d4a9d863a5cb4d610&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F92%2F67%2F3456f22ec9b232d.jpg";
        } else {
          return;
        }
      });
      this.echarts.setOption(option);
    });
    // setTimeout(() => {
    //   this.echarts = (this as any).$echarts.init(this.$refs.test1);
    // this.echarts.setOption(this.getoption());
    // });
    window.addEventListener("resize", () => {
      this.echarts.resize();
    });
  }

  private getoption() {
    const option = {
      title: {
        text: "双坐标轴事例", //标题
        show: true, //是否显示标题
        textStyle: {
          fontSize: 10 / window.devicePixelRatio,
        },
      },
      grid:{
        top:'20%',
        left:'5%',
        right:'25%',
        containLabel: true,
      },
      toolbox:{
        showTitle : false,
         feature: {
          myTool1: {
            show: true,
            title: "自定义扩展方法1",
            icon:
              "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
            onclick: function () {
              alert("myToolHandler1");
            },
          },
          myTool2: {
            show: true,
            title: "自定义扩展方法",
            icon: "image://http://echarts.baidu.com/images/favicon.png",
            onclick: function () {
              alert("myToolHandler2");
            },
          },
        },
      },
      tooltip: {
        //	气泡
        trigger: "axis",
        formatter:
          "{b}<br/><div style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:red;'></div>{a0}:{c0}件<br/><div style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ccc;'></div>{a1}：{c1}%", //b为数据名；a0,a1为系列名，c0为y轴左侧数据，c1为右侧
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "line", // 默认为直线，可选为：'line' | 'shadow'
        },
       
      },
      legend: {
        //图例
        type: "scroll",
        right: 0,
        top:60,
        symbolKeepAspect: true,
        orient: "vertical",
        itemWidth: 15 / window.devicePixelRatio,
        itemHeight: 15 / window.devicePixelRatio,
        data: [
          {
            name: "销量",
            icon:
              "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597902005557&di=5fe1e3016a39836b67003fc5c7424718&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F99%2F78%2F3156f388cebc696.jpg",
          },
          {
            name: "增长率",
            icon:
              "image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597902005557&di=5fe1e3016a39836b67003fc5c7424718&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F99%2F78%2F3156f388cebc696.jpg",
          },
        ],
        textStyle: {
          fontSize: 14 / window.devicePixelRatio,
        },
      },
      xAxis: {
        interval: 0,
        type: "category",
        data: [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子",
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子",
        ],
      },
      yAxis: [
        {
          type: "value",
          // name: "销量",
          
          axisLabel: {
            formatter: "{value} 件",
            fontSize: 10,
          },
        },
        {
          type: "value",
          // name: "增长率",
          
          axisLabel: {
            fontSize: 10,
            formatter: "{value}%",
          },
        },
      ],
      series: [
        {
          name: "销量",
          
          type: "bar", //柱状图
          barWidth: "30%",
          barMaxWidth: 10,
          itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
          },
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        },
        {
          name: "增长率",
          type: "line", //线形图
          areaStyle: {
            color:'red',
            opacity: 0.2,
          },
          yAxisIndex: 1, //使坐标轴在右侧显示，当有多个坐标轴时，数字依次增大，可建立多个Y轴
          data: [0, 300, 80, -72, 0, 100, 0, 300, 80, -72, 0, 100],
        },
      ],
      dataZoom: [
        //给x轴设置滚动条
        {
          type: "slider", //slider表示有滑动块的，inside表示内置的
          // startValue: 8,//可用于设置开始显示的柱子的长度
          // endValue: 1,//可用于设置结束显示的柱子的长度
          start: 0, //默认为0  可设置滚动条从在后进行展示
          end: 30, //默认为100
          show: true,
          xAxisIndex: [0],
          handleSize: 0, //滑动条的 左右2个滑动条的大小
          height: 9, //组件高度
          left: "10%", //左边的距离
          right: "10%", //右边的距离
          top: "85%",
          bottom: -2, //右边的距离
          borderColor: "#F4F4F4",
          fillerColor: "#ccc",
          backgroundColor: "#F4F4F4", //两边未选中的滑动条区域的颜色
          showDataShadow: false, //是否显示数据阴影 默认auto
          showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
          realtime: true, //是否实时更新
          filterMode: "filter",
          handleStyle: {
            borderRadius: "30",
          },
        },
        // 下面这个属性是开启滚轮放大缩小
        // {
        //   type: "inside",
        //   show: true,
        //   xAxisIndex: [0],
        //   start: 0, //默认为1
        //   end: 100, //默认为100
        //   moveOnMouseWheel: false,
        //   preventDefaultMouseMove: false,
        // },
      ],
    };
    return option;
  }
}
</script>

<style>
html,
body,
#app,
.test1,
.apps {
  height: 100%;
  width: 100%;
}
.test1 {
  width: 7.5rem;
  height: 9.5rem;
  margin-left: 20px;
}
</style>