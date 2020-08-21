<template>
  <div>
    <div ref="eacBox" class="eacBoxs"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({})
export default class extends Vue {
  @Prop(Array) readonly options!: [] | undefined;
  private echarts: any;
  private getoption() {
    const option = {
      color: ["#ccc", "#fff", "red", "yellow"],
      tooltip: {
        trigger: "axis",
        show: true,
        confine: true,
        axisPointer: {
          axis: "auto",
          type: "shadow",
          textStyle: {
            color: "#fff",
          },
          shadowStyle: {
            color: "#ccc",
            opacity: 0.4,
          },
        },
        formatter: function (params: any) {
          let str = "";
          params.forEach((item: any, idx: any) => {
            str = "";
            switch (item.dataIndex) {
              case 0:
                str += `<div style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ccc;"></div>: ${item.data}个`;
                break;
              case 1:
                str += `<div style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ccc;"></div>: ${item.data}个`;
                break;
                break;
              case 2:
                str += `<div style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:red;"></div>: ${item.data}个`;
                break;

              case 3:
                str += `<div style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:blue;"></div>: ${item.data}个`;

                break;
              case 4:
                str += `<div style="display:inline-block;margin-right:15px;border-radius:10px;width:10px;height:10px;background-color:pink;"></div>: ${item.data}个`;

                break;
              case 5:
                str += `<div style="display:inline-block;margin-right:15px;border-radius:10px;width:10px;height:10px;background-color:pink;"></div>: ${item.data}个`;

                break;

              default:
            }
            str += idx === params.length - 1 ? "" : "<br/>";
          });
          return str;
        },
        textStyle: {
          fontStyle: "italic",
          fontFamily: "sans-serif",
        },
      },
      xAxis: {
        type: "category",
        data: (this as any).options.map((item: any) => {
          return item.name;
        }),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: (this as any).options.map((item: any) => {
            return item.leftnums;
          }),
          type: "line",
          areaStyle:{
            origin : 'end'
          },
          smooth:.5,
          smoothMonotone:'x',
          sampling:"min",
          lineStyle: {
            width:3,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "red", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "blue", // 100% 处的颜色
                },
              ],
            },
            global: false,
          },
        },
      ],
    };
    return option;
  }

  private mounted() {
    this.echarts = (this as any).$echarts.init(this.$refs.eacBox);
    this.echarts.setOption(this.getoption());

    this.echarts.on("click", (a: any) => {
      console.log(a);
    });
  }
  @Watch("options", { deep: true })
  chageOptions(newval: any, oldval: any) {
    if (newval != oldval) {
      this.echarts.setOption(this.getoption());
    }
  }
}
</script>

<style>
.eacBoxs {
  width: 8.6rem;
  height: 6.9rem;
}
</style>