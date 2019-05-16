// components/buy-bottom/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoCart(){
      this.triggerEvent("gotoCart",{},{})
    },
    addCart(){
      this.triggerEvent("addCart", {}, {})
      wx.showToast({
        title: '添加购物车成功',
      })
    },
    buy(){
      this.triggerEvent("buy", {}, {})
    }
  }
})
