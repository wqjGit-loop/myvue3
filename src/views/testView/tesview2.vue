<template>
  <div class="vxe_wrapers">
    <div class="test" @click="$router.push({name:'a'})" >111111</div>
    <transition enter-active-class="animate__animated animate__backInRight"  leave-active-class="animate__animated animate__backOutRight">

      <div v-if="test">dsadsadsadsada</div>
    </transition>
    
    <vxe-table
      border
      :tooltip-config="{enabled: true}"
      show-overflow
      :edit-config="editConfig"
      :data="tableData"
      max-height="300"
    >
      <!-- :keyboard-config="{isArrow: true} " -->
      <!-- :scroll-y="{rSize:5,vSize:5}"
      :scroll-x="{rSize:5,vSize:5}"-->
      <vxe-table-column type="seq" width="25%" fixed="left">
         <template  v-slot="{ row, _columnIndex }"><div @click="clickss(row, _columnIndex)"><i>我就说这个是icon</i>第{{row.name}}个</div></template>
      </vxe-table-column>
      <vxe-table-column
        :edit-render="{name: 'input', immediate: true,events: {input: nameChangeEvent}, attrs: {type: 'text'}}"
        field="name"
        title="Name"
        width="25%"
        fixed="left"
      >
      <template><div class="source-status">
        <i class="mark alert"></i>我又进来了
        </div></template>
      </vxe-table-column>
      <vxe-table-column
        :edit-render="{name: 'input', immediate: true, attrs: {type: 'text'}}"
        field="sex"
        title="Sex"
        width="25%"
      ></vxe-table-column>
      <vxe-table-column
        :edit-render="{name: 'input', immediate: true, attrs: {type: 'text'}}"
        field="age"
        title="Age"
        width="25%"
      ></vxe-table-column>
      <vxe-table-column
        :edit-render="{name: 'input', immediate: true,  attrs: {type: 'text'}}"
        field="address"
        title="Address"
        show-overflow
        width="25%"
      ></vxe-table-column>
    </vxe-table>

    <vxe-button @click="ClickVxeTable">我就调一下</vxe-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
interface onjselect {
  checked: boolean;
  records: any;
}
interface editconfig {
  trigger: string;
  mode: string;
  icon?: string;
}
interface editrender{
    name:string,
    immediate:boolean,
    attrsType:string
  }
@Component({})
export default class Name extends Vue {
  @Prop({
    default: ()=>{
      return{
      trigger: "dblclick",
      mode: "row",
      icon: "vxe-icon--refresh roll",
    }
    }
  })
  readonly editConfig!: editconfig;
  @Prop() readonly tableData!: Array<any>;
  @Emit("ClickVxeTable")
  ClickVxeTable() {
    return false;
  }
  private tests(){
    this.test=!this.test
  }
  private test=false
  private tablist = [1, 2, 3, 4, 5, 4, 3, 2, 2, 2, 3, 3, 4, 5, 9];
  private loading = false;
  nameChangeEvent({ column }:any){
    console.log(column)
  }
  selectAllEvent({ checked, records }: onjselect) {
    // console.log(checked ? '所有勾选事件' : '所有取消事件', records)
  }
  selectChangeEvent({ checked, records }: onjselect) {
    // console.log(checked ? '勾选事件' : '取消事件', records)
  }
  private clickss(a:any,b:any){
    console.log(a,b);
    
  }
  private async mounted() {
    // this.loading = true;
    // setTimeout(() => {
    //   // 使用函数式加载，阻断 vue 对大数组的监听，大数据性能翻倍提升
    //   if (this.$refs.xTable) {
    //     // eslint-disable-next-line
    //     this.$refs.xTable.loadData(this.tableData);
    //   }
    //   this.loading = false;
    // }, 300);
  }
}
</script>

<style lang='scss'>
$color:red;
.test{
    @include normalStyle;
}
.meiyou img {
  height: 100px;
  width: 100px;
}
.vxe_wrapers {
  width: 75%;
  height: 300px;
}
.source-status {
  display: flex;
  //justify-content: center;
  align-items: center;
  .mark {
    //width: 8px;
    flex: 0 0 8px;
    height: 8px;
    border-radius: 100%;
    margin-right: 10px;

    &.alert {
      background: #fe6767;
    }

    &.success {
      background: #52c41a
    }
  }
}
body {
  -webkit-tap-highlight-color: transparent;

  /*滚动条滑块按钮的颜色*/
  scrollbar-face-color: #f96321;

  scrollbar-arrow-color: #ddd;

  /*滚动条轨道颜色*/
  scrollbar-track-color: #ddd;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px #999;
  box-shadow: inset 0 0 5px #999;
  background: #999;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px;

  /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px #999;
  box-shadow: inset 0 0 5px #999;
  background: #999;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨�?*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  display: none;
}
</style>