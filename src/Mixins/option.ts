import { Component, Vue } from 'vue-property-decorator'
@Component({
    name: 'optionsMixin'
})
export default class extends Vue {
    protected Anames!: String | null
    private aaa: string = "玩个三麻子"
    setName() {
        this.Anames = "王二麻子"
    }

}