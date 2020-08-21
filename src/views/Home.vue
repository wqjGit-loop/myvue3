<template>
  <div id="app">
    {{bar}}
    {{bars}}
    <h2 ref="cccc">{{propA}}</h2>
    <h3>{{name}}</h3>
    <h1>{{names}}</h1>
    <div>
      <a v-for="(li,index) in ArrayA" :key="index">{{li}}</a>
    </div>
    <input type="text" name id v-model="num" />
    <input type="checkbox" :checked="checked" @change="change" />
    <lines :options="options"></lines>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Watch,
  Ref,
  Inject,
  InjectReactive,
  Emit,
  Model,
} from "vue-property-decorator";
import lines from "@/components/eachersView/line.vue";
import pages from "@/components/eachersView/line.ts";

@Component({
  components: {
    lines,
  },
})
export default class  extends Vue {
  private options: Array<any> = [
    { name: "Mon1", leftnums: 200 },
    { name: "Tue" ,leftnums:400},
    { name: "Tue" ,leftnums:800},
    { name: "Fri" ,leftnums:1000},
    { name: "Sat" ,leftnums:1200},
    { name: "Sun" ,leftnums:1400},
  ];
  @PropSync("names", { type: String }) syncednames!: string;
  // @Prop(Number) readonly propA: Number | undefined;
  @Prop({
    type: Number,
    validator: (value: any) => {
      if (value < 10) {
        alert("错误提示");
      }
      return value > 10;
    },
    required: false,
  })
  private propA!: Number;

  @Prop(Array) readonly ArrayA!: [] | undefined;

  @InjectReactive() private bar!: string;
  @Ref("cccc") readonly cccc!: string;

  private name: String = "zhangsan";
  private num: any = 2;
  private created(){
     
  }
  private mounted() {
    this.$nextTick(()=>{
      console.log(this.$store)
    })
    pages.getoption("a")
  }
  @Watch("bars")
  onWatchars(news: number, old: number) {
    // console.log(news, old);
  }
  get bars() {
    return this.num + "dasdsada";
  }

  @Model("checked", {
    type: Boolean,
  })
  checked!: boolean;

  @Emit("checked")
  private change() {
    this.options=[
      
    { name: "Mon2", leftnums: this.num+=100 },
    { name: "Tue3" ,leftnums:400},
    { name: "Tue3" ,leftnums:800},
    { name: "Fri" ,leftnums:1000},
    { name: "Sat" ,leftnums:1200},
    { name: "Sun" ,leftnums:1400},
  ];
    return !this.checked;
  }
}
</script>

<style lang="scss">
#app{
  font-size: 12px;
}

</style>