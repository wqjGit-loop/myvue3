<template>
  <div>
    <tesview2
      :tableData="mydata"
      :tableConfig="tableConfig"
      :tableHeaderConfig="tableHeaderConfig"
      :editConfig="editConfig"
    ></tesview2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tesview2 from "@/views/testView/tesview2.vue";
import {data} from "@/views/testView/index.js"
@Component({
  components: {
    tesview2,
  },
})
export default class tesview3 extends Vue {
  private tableConfig = [];
  private mydata=data
  private editConfig={
      trigger: "click",
      mode: "cell",
      icon: "vxe-icon--more",
    }
  private tableHeaderConfig = {
    border: "none", //border=false|default 默认显示   border=true|full 显示完整边框   outer 显示外边框  inner 显示内边框
  }
  mounted(){

  }
}
</script>

<style>
</style>
