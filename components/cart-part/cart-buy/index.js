// components/cart-part/cart-buy/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    select:{
      type:Boolean,
      value:false,
    },
    money:{
      type:Number,
      value:111
    },
    count:{
      type:Number,
      value:0,
      observer:function(news,olds){
        if(news === 0){
          this.setData({
            canBtn:false
          })
        }else{
          this.setData({
            canBtn: true
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    canBtn:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeSelect(){
       let select = this.data.select
       this.setData({
         select: !select
       })
       // 触发一个selectOption选择
       this.triggerEvent('selectAll',this.data.select)
    },
    calculate(){
       // 当count值为0的时候不能调用
       if(canBtn){
         this.triggerEvent("calculate")
         wx.showToast({
           title: '跳转结算页面',
         })
       }else{
         return 
       }
    }
  }
})
