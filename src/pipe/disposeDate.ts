class disposeDate{
    public setdata(num:number){
        return num*20/50
    }
    public formarte(str:string){
    
    }
    public fontSize(res:number){
        let doc=document.documentElement;
        let clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        if(!clientWidth)return
        let fontsize=100*(clientWidth/1920)
        return res*fontsize
    }
}
const disPoseDate=new disposeDate()
export default disPoseDate