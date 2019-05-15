// pages/event/event.js
Page({
  data: {
  },
  handle1:function(){
    console.log("1:支持事件冒泡")
  },
  handle2:function(){
    console.log("2:不支持事件冒泡")
  },
  handle3:function(e){
    console.log("触发事件名称:"+e.type);
    console.log(e.target);
    console.log(e.timeStamp);
    console.log("3:父元素");
    //----------------------------
    console.log(e.target.dataset.idx);

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