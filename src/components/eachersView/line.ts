
class names {
  constructor(){
    
  }
   getoption(names:string){
    
    const option={
      tooltip:{
        trigger : 'axis',
        
      },
      xAxis: {
        type: "category",
        data:[
    { name: "Mon1", leftnums: 200 },
    { name: "Tue" ,leftnums:400},
    { name: "Tue" ,leftnums:800},
    { name: "Fri" ,leftnums:1000},
    { name: "Sat" ,leftnums:1200},
    { name: "Sun" ,leftnums:1400},
  ]
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            { name: "Mon1", leftnums: 200 },
            { name: "Tue" ,leftnums:400},
            { name: "Tue" ,leftnums:800},
            { name: "Fri" ,leftnums:1000},
            { name: "Sat" ,leftnums:1200},
            { name: "Sun" ,leftnums:1400},
          ],
          type: "line",
        },
      ],
    };
    return option
  }
}

let pages=new names()
export default pages