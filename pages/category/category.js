// pages/category/category.js
import { getCategoryData, getCategoryItemsData} from "../../model/API.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     leftItems:null,
     rightItems:null,
     windowHeight:0,
     tapColor:0,
    toRinghtView:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let res = wx.getSystemInfoSync()
    this.setData({
      windowHeight :res.windowHeight
    })
     // 获取左边列表的数据
    getCategoryData().then(res=>{
      this.setData({
         leftItems:res.data
      })
    })
     // 获取右边列表的数据
    getCategoryItemsData().then(res=>{
      var arry = []
      var obj = {}
      res.data.forEach(item => {
        if (!obj[item.type]) {
          obj[item.type] = item.type
        }
      })
      // 得到的类型的数据：
      // obj = {
      //   router:'router',
      //   phone:'phone'
      // }
      // 
      for (var i in obj) {
        arry.push({ "name": obj[i], 'goodsArry': [] })
      }
      // 遍历所有数据
      arry.forEach(item => {
        res.data.forEach(items => {
          if (items.type === item.name) {
            item["goodsArry"].push({ "name": items.name, "imgUrl": items.imgUrl })
          }
        })
      })
      this.setData({
        rightItems: arry
      })
    })
  },
  leftClick(ev){
    this.setData({
      tapColor:ev.target.id,
      toRinghtView:"ids"+ev.target.id
    })
  }
})