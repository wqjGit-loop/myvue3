import Vue from 'vue';
import Vuex from 'vuex';

import {Iallocation} from '@/store/modules/auth';
Vue.use(Vuex);
export interface IRootState {
  Iallocation: Iallocation;
}

export default new Vuex.Store<IRootState>({


})