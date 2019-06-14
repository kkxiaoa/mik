// pages/other/goods/index.js
import { getGoodsInfo} from "../../../model/API.js"
import { getAddress} from "../../../utils/getAddress.js"
import { getCartCountFromStorage} from "../../../utils/getCount.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

    goodsdesc: null,
    hotgoodsData: null,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    address:'',  // 地址
    poster: '', // 商品的海报
    goodsId:'', // 商品的id
    count:0 // 商品数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
     let id = options.goodsid
     let poster = options.poster
     // 根据接口传入商品id，获取对应商品的详情数据
    getGoodsInfo({goodsid:id}).then(res=>{
      res.data[0].posters = JSON.parse(res.data[0].posters)
      res.data[0].desc_pictrues = JSON.parse(res.data[0].desc_pictrues)
      console.log(res.data[0])
      this.setData({
        goodsdesc:res.data[0],
        poster:poster,
        goodsId:id
      })
    })

    // 获取当前位置
    getAddress().then(res=>{
      console.log(res)
      this.setData({
        address:res
      })
    })
    // 获取当前cart的数量
    let count = getCartCountFromStorage()
    this.setData({
      count:count
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
  bannerChange(res){
    if (res.detail.current !== 0){
      // 视频停止
      var video = wx.createVideoContext("goodsVideo")
      video.pause();
    }
  },
  playVideo(){
    this.setData({
      autoplay:false
    })
  },
  pauseVideo(){
    this.setData({
      autoplay: true
    })
  },
  endVideo(){
    this.setData({
      autoplay: true
    })
  },
  // 触发添加购物车按钮
  addCart(){
    // 获取本地购物车数据
    let cart = wx.getStorageSync('cartGoods')
    cart =JSON.parse(cart)

    // 构建出要添加到购物车的一个商品信息
    var newGoods = {
      selectStatus:true,
      posterUrl:this.data.poster,
      goodsTitle:this.data.goodsdesc.title,
      count:1,
      goodsPrice:this.data.goodsdesc.price,
      goodsId:this.data.goodsId
    }

    // 判断cart的长度为0
    if(cart.length === 0){
      cart.push(newGoods)
    }else{
      //  本地购物车已经有商品
      let l = cart.length, flag=false;
      for(let i =0;i<l;i++){
        if(cart[i].goodsId === newGoods.goodsId){
          // 说明这个商品已经添加过了，
          cart[i].count++ // 将商品数量+1就可以
          flag = true // 标志我们在cart种找到了
        }
      }
      if(!flag){
        // 遍历完整个cart，没找到相同的商品
        cart.push(newGoods)
      }
    }
    // 将cart 字符串化存入我们的本地
    cart = JSON.stringify(cart)

    wx.setStorageSync('cartGoods', cart)
    let count = getCartCountFromStorage()
    this.setData({
      count:count
    })
    
  },
  // 触发立即购按钮
  buy(){
    wx.showToast({
      title: '跳转购买页面',
    })
  },
  // 触发跳转到购物车页面
  gotoCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  }
})