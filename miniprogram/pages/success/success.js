// pages/success/success.js

const app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
    //登录成功数量加1
    var c = app.globalData.loginCount;
    c+=1;
    //修改全局共享数据
    app.globalData.loginCount = c;
    //跳转
    //wx.navigateTo({
    //  url: '/pages/main/main',
    //})
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
  },
  play:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://127.0.0.1:3000/bg.mp3',
    });
  },
  pause:function(){
    wx.pauseBackgroundAudio();
  },
  stop:function(){
    wx.stopBackgroundAudio();
  }

})