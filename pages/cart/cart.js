// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasGoods:false,
    count:0,
    money:0,
    cartGoods:[],
    selectAll:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //
     let cart = wx.getStorageSync('cartGoods')
     cart = JSON.parse(cart)
     // 遍历购物车
     if(cart.length !==0){
       let count =0,money =0;
       cart.forEach((item)=>{
          if(item.selectStatus){
            count += item.count
            money += item.count * item.goodsPrice
          }
       })
       this.setData({
         cartGoods:cart,
         count,money,
         hasGoods:true
       })
     }else{
       
     }
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
      // 页面重新显示的时候，去本地缓存拿去购物车的数据
      let cart = wx.getStorageSync("cartGoods")
      // 将购物车的数据解析成对象
      cart = JSON.parse(cart)

      if(cart.length === 0){
        return 
      }else{
        this._setMoney(cart)
      }
  },
  // 监听子组件触发的选择事件
  selectOption(options){
    
    let status = options.detail
    let goodsid = options.target.dataset.goodsid
    // 从storay中拿出cart数据，将对应商品的selectStatus值改为传出来的状态值
    let cart =wx.getStorageSync('cartGoods')
    cart = JSON.parse(cart)
    for(let i = 0;i<cart.length;i++){
       if(cart[i].goodsId == goodsid){
         cart[i].selectStatus = status
         break
       }
    }
    // 将改动的存入
    wx.setStorageSync('cartGoods', JSON.stringify(cart))
    this._setMoney(cart)
  },
  // 监听子组件触发的删除商品事件
  del(options){
    let goodsid = options.target.dataset.goodsid
    // 取出存储的，然后删除
    let cart = wx.getStorageSync('cartGoods')
    cart = JSON.parse(cart)
    // 遍历删除对应商品ID的值
    for(let i = 0;i<cart.length;i++){
      if(goodsid === cart[i].goodsId){
         cart.splice(i,1)
         break
      }
    }
    // 已经删除了我们需要删除的数据
    // 判断购物车是否为空
    if(cart.length === 0){
      //为空则显示空的页面
      this.setData({
        hasGoods:false
      })
    }else{
      this.setData({
        cartGoods:cart
      })
    }
    // 存入本地
    wx.setStorage({
      key: 'cartGoods',
      data: JSON.stringify(cart),
    })
    this._setMoney(cart)
  },
  _setMoney(cart){
    // cart为获取到的购物车数据
    let count =0,money=0, selectAll=true;
    if(cart.length!==0){
      cart.forEach((item)=>{
        if(item.selectStatus){
          count+=item.count
          money += item.count *item.goodsPrice
        }else{
          selectAll = false
        }
      })
      this.setData({
        cartGoods:cart,
        hasGoods:true,
        count,money,selectAll
      })
    }
  },
  goStore(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  selectAll(options){
    // 全选的选区状态，子组件传递过来的值
    let option = options.detail
    // 遍历，将所有选择状态改为需要设置的状态
    let cart = wx.getStorageSync('cartGoods')
    cart = JSON.parse(cart)
    cart.forEach(item=>{
      item.selectStatus = option
    })
    // 将设置好的结果存储
    wx.setStorageSync('cartGoods', JSON.stringify(cart))
    // 更新数据
    this._setMoney(cart)
  }
})