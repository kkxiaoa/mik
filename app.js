App({
  onLaunch(){
    wx.setStorage({
      key: 'cartGoods',
      data: '[]'
    })
  }
})