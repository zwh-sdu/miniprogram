const db=wx.cloud.database();
const util = require('../../utils/util.js')
let Place='';
let Runtime='';
let Operator='';
let robot_number='';
Page({

  /**
   * 页面的初始数据
   */
    
    data: {},


      expInput(e) {
        Place= e.detail.value 
      },
      expInput2(e) {
       Runtime= e.detail.value 
      },
      expInput3(e) {
        Operator= e.detail.value 
      },
      expInput4(e) {
        robot_number= e.detail.value
      },
      formSubmit: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        this.setData({
          allValue:e.detail.value
        })
      },
      formReset: function () {
        console.log('form发生了reset事件')
        this.setData({
          allValue:''
        })
      },
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    bindReplaceInput: function (e) {
      var value = e.detail.value
      var pos = e.detail.cursor
      var left
      if (pos !== -1) {
        // 光标在中间
        left = e.detail.value.slice(0, pos)
        // 计算光标的位置
        pos = left.replace(/11/g, '2').length
      }
  
      // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
      return {
        value: value.replace(/11/g, '2'),
        cursor: pos
      }
  
      // 或者直接返回字符串,光标在最后边
      // return value.replace(/11/g,'2'),
    },
    bindHideKeyboard: function (e) {
      if (e.detail.value === '123') {
        // 收起键盘
        wx.hideKeyboard()
      }
    },
    getScancode:function(){
      wx.scanCode({
        success: (res) => {
          robot_number = res.result;
          var result = res.result;
          this.setData({
            result: result,
          })
        }
      })
    },
    getInputValue(e){
      let content;
      this.setData({
      content : e.detail.value.robotnumber
      })  
    },
    runningsubmit(){
      if (!Place||!Runtime||!Operator||!robot_number) {
        wx.showModal({
          title: '提示',
          content: '输入不全！',
          showCancel: false
        })
        return
      }
       wx.showModal({
        title: '提示',
        content: '提交成功！',
        showCancel: false
       })
      db.collection('runningrobot').add({
        data:{
          robotnumber:robot_number,
          place:Place,
          runtime:Runtime,
          starttime:new Date(),
          operator:Operator,
          Time:util.formatTime(new Date())
        }
      })
      .then(res=>{
        console.log(res)
      })
    },
    wrongsubmit(){

    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})