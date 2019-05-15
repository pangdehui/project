//logs.js
const util = require('../../utils/util.js')
//1:获取全局组件
const app = getApp();
Page({
  data: {
    // msg:msg
    lisy:null
  },
  funclick:function(e){
    // console.log("我要穿入的值",e)
    let id=e.currentTarget.dataset.id;
    let item=e.currentTarget.dataset.item
    // console.log(item)
    // console.log("我传入的data-id+",id,"我传入的data-item="+item)
    let str=JSON.stringify(id);
    // console.log(str)
    let _str=JSON.stringify(item)
    // console.log(_str)
    wx.navigateTo({
      url: '/pages/test/test?jsonStr=' + str +"&strr="+_str,
    })
  },

  onLoad: function (options) {
    var that = this;
    var url = "http://www.codeboy.com/data/product";
    //读取缓存
    var student = wx.getStorageSync('student');

    var classid = student.classid;
    // console.log(classid);

    wx.request({
      url: url,
      data: {
        classid: classid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // console.log(res.data.topSaleItems);
        that.setData({ lisy: res.data.topSaleItems });
      },fail:function(){
        console.log("调用接口失败")  
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){
    // console.log(this)
    // console.log(wx)
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
