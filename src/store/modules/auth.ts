import { VuexModule, Module, Mutation,  getModule } from 'vuex-module-decorators'
import store from '@/store/index'


export interface Iallocation {
  latestAllocationInfo: null | any;
  loadingFullPage: boolean;
}

@Module({
  name: 'AllocationOptions', dynamic: true, store,
})
class AllocationOptions extends VuexModule implements Iallocation {
  // state => 要public不然外面调用不到
  public latestAllocationInfo = null;
  public loadingFullPage = false;

  // get latestAllocationId(): string {
  //   if (this.latestAllocationInfo) {
  //     return this.latestAllocationInfo.id
  //   } else {
  //     return ''
  //   }
  // }

  @Mutation
  public setAllocationInfo(data: any) {
    this.latestAllocationInfo = data;
  }

  @Mutation
  public setLoadingFullPage(flag: boolean) {
    this.loadingFullPage = flag;
  }


}

export const AllocationModule = getModule(AllocationOptions);
