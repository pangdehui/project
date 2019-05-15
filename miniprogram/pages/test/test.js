// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datail:[],
    detailList:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  let that=this;
  // console.log(options)
  // console.log(options.jsonStr)
  // console.log(options.strr)
    let item = JSON.parse(options.jsonStr) 
  //  let id=options.strr
  //  let pp=JSON.parse(id)
  //  console.log(pp)
  //  console.log("上个页面跳转的data-item",item)
  //  console.log("上个页面跳转的data-id",id)
    var url ="http://www.codeboy.com/data/product/details.php?lid="+item
    console.log(url)
    var student = wx.getStorageSync('student');
    var classid = student.classid;

   wx.request({
     url: url,
     data: {
       classid: classid
     },
     header: {
       'content-type': 'application/json' // 默认值
     },
     success: function (res) {
       console.log(res.data.details);
       that.setData({detailList:res.data.details  });
     }, fail: function () {
       console.log("调用接口失败")
     }
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this)
    // console.log(this.data.detail)
    // console.log(this.datail)
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