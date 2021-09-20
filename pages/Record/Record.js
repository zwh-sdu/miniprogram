const db = wx.cloud.database()
const records=db.collection('records')
Page({
  data:{
    record:[],
  },
  getInputValue(e){
    let content;
    this.setData({
    content : e.detail.value.robotnumber
    })  
  },
  collect(){
    records.get({
      success:res=>{
        console.log(res),
        this.setData({
          record:res.data
        })
      }
    })
  },

  getScancode: function(){
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        this.setData({
          result: result,
        })
      }
    })
  }
})