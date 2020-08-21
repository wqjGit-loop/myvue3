import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Echarts from "vue-echarts-ts";
import echarts from "echarts";
import 'animate.css'
import "./piugins/antd"
import '@/piugins/vxe-table.js'; // vxe组件注入
import "@/utils/rem.js"
Vue.prototype.$echarts=echarts
Vue.prototype.$Echarts=Echarts
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
