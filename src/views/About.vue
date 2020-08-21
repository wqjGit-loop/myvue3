<template>
  <div>
    <div class="charslist"><VEchart :options="chartOptions" :autoresize="true" ></VEchart></div>
    
    <div class="loading-modal" v-if="isshow">
      <a-icon type="loading" style="font-size: 25px" spin />
    </div>
    {{strin|formarte}}
    {{checked}}
    <Home :propA="20" :ArrayA="ArrayA" :names="names" v-model="checked"></Home>
    <div ref="eacs" class="eacs"></div>
  </div>
</template>
<script lang="ts">
import { AllocationModule } from "@/store/modules/auth";
import {
  Component,
  Vue,
  Provide,
  ProvideReactive,
  Watch,
} from "vue-property-decorator";
import VEchart from "vue-echarts";
import { EChartOption } from "echarts";
import Mymixins from "@/Mixins/option";
import disPoseDate from "@/pipe/disposeDate";
import Home from "./home.vue";
@Component({
  mixins: [Mymixins],
  filters: {
    setdata: disPoseDate.setdata,
    formarte: disPoseDate.formarte,
  },
  components: {
    Home,
    VEchart,
  },
})
export default class extends Vue {
  @ProvideReactive() private bar = "共享操作";
  private isshow: boolean = false;
  private checked: Boolean = false;
  private strin: string = "123456789";
  private names: String = "张三";
  chartOptions = {
    title: {
      text: "会员数据统计",
      subtext: "动态数据",
      x: 'center',
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      show: true,
      orient: "vertical",
      left: "left",
      textStyle:{
        fontSize:12 / window.devicePixelRatio
      },
      data: ["微信访问", "公众号访问", "扫码进入", "分享进入", "搜索访问"],
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "微信访问" },
          { value: 310, name: "公众号访问" },
          { value: 234, name: "扫码进入" },
          { value: 135, name: "分享进入" },
          { value: 1548, name: "搜索访问" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  private ArrayA: String[] = ["5", "6", "8"];
  private nums: number = 50;
  fontSize(res:number){
        let doc=document.documentElement;
        let clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        if(!clientWidth)return
        let fontsize=100*(clientWidth/1920)
        return res*fontsize
    }
  private option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: 10,
      selectedMode :"multiple",
      textStyle:{color:'red',fontSize : 12 / window.devicePixelRatio},
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      selected: {
    // 选中'系列1'
    '直接访问': false,
    // 不选中'系列2'
    '邮件营销': false
}
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12 / window.devicePixelRatio,
            // 12 / window.devicePixelRatio,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" },
        ],
      },
    ],
  };
  private created() {}
  mounted() {
    let echarts = (this as any).$echarts.init(this.$refs.eacs);
    echarts.setOption(this.option);
    window.addEventListener("resize", function () {
      echarts.resize();
    });
    this.MSGsssss();
  }
  private MSGsssss() {}
}
</script>

<style lang="scss">
.charslist {
  width: 5rem;
  height: 5rem;
}
.echarts {
  width: 100%;
  height: 100%;
}
.eacs {
  height: 10rem;
  width: 11rem;
}
.loading {
  font-size: 0.5rem;
}

.scope-box,
.demand-ratio-box {
  padding: 20px 0;
}

.demand-ratio-box {
  /deep/ .select-wrap {
    margin-right: 38px;

    .ant-btn {
      width: 139px;
    }
  }
}

//组件样式
.details-box-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header,
  .main,
  .footer {
    width: 100%;
    padding: 0 32px 0 26px;
  }

  .header {
    height: 54px;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px 0 26px;

    .title {
      font-family: ArialMT;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
    }

    .close {
      cursor: pointer;
    }
  }

  .main {
    min-width: 0;
    min-height: 0;
    flex: 1;
    padding-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
  }

  .footer {
    height: 54px;
    // height: 54px;
    flex-shrink: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .operator {
      .close {
        margin-right: 14px;
      }
    }
  }
}

.loading-modal {
  background: rgba(255, 255, 255, 0.5);
  z-index: 21;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
}

.common-nav-content {
  flex: 1;
  min-height: 0;

  .inner-nav-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>