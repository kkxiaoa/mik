// components/cart-part/cart-goods/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    select:{
      type:Boolean,
      value:true,
      observer:function(news,olds){
        console.log(news,olds)
      }
    },
    posterurl:String,
    title:String,
    count:Number,
    price:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    del:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
     start(ev){
       let x = ev.changedTouches[0].pageX
       this.data.x = x
     },
     end(ev){
       let x = ev.changedTouches[0].pageX
       if(this.data.x - x >20){
         // 向左边滑动
         console.log("向左边滑动")
         this.setData({
           del:true
         })
       }else if(this.data.x - x < -20){
         console.log("向右边滑动")
         this.setData({
           del: false
         })
       }
     },
    changeSelect(){
       // 获取到当前的状态：
       let select = this.data.select
       this.setData({
         select:!select
       })
       // 触发一个selectOption选择
       this.triggerEvent('selectOption',this.data.select)
    },
    // 点击删除按钮
    delGoods(){
      this.setData({
        del:false
      })
      this.triggerEvent("del")
    }
  }
})
