import Vue from 'vue';  
import XEUtils from 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/index.css';
import i18n from './i18n';  
import tableEN from 'vxe-table/lib/locale/lang/en';

Vue.use(VXETable);
VXETable.setup({
  // 集成 vue-i18n
  i18n: key => i18n.t(key),
  // 对参数的内容自动进行国际化翻译
  translate: (key) => i18n.t(key)
});
