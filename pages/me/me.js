// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    nickName:'游客',
    showMask:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let timer = setInterval(()=>{
       wx.getSetting({
         success:(res)=>{
           if(res.authSetting['scope.userInfo']){
             // 用户授权成功
             this.setData({
               showMask:false
             })
             wx.showLoading({
               title: '加载中',
             })
             clearInterval(timer)
             // 得到用户信息
             wx.getUserInfo({
               success:(res)=>{
                  const userInfo = res.userInfo
                  const nickName = userInfo.nickName
                  const avatarUrl = userInfo.avatarUrl
                  this.setData({
                    avatarUrl,nickName
                  })
                  wx.hideLoading();
               }
             })
           }
         }
       })
     },200)
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