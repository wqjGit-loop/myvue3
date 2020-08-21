import Vue from 'vue';
import VueI18n from 'vue-i18n';
// 组件的语言包(改成异步获取的方式更好)
import tableEN from 'vxe-table/lib/locale/lang/en';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  silentTranslationWarn: true, // 不显示warn提示
  messages: {
    en: {
      ...tableEN,
    }
  }
});

export default i18n;
