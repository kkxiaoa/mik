import { getBannerData, getGoodsDatas } from "../../model/API.js"
Page({
  data:{
    indicatorDots:true,
    bannerData:[],
    goodsDatas: [],
    pageIndex :1,
    addMore:true, // 是否能加载更多
    flag:true // 节流标志
  },
  // 生命周期钩子
  onLoad(){
     // 页面加载时发送请求，获取banner数据
    getBannerData().then(res=>{
      let datas = res.data
      // this.bannerData = datas; 错误
      this.setData({
        bannerData: datas
      })
    })
    // 加载商品列表的数据
    getGoodsDatas().then(res=>{
      this.setData({
        goodsDatas:res.data
      })
      
    })
  },
  togoSearchPage(){
    // 跳转到搜索页面
    wx.navigateTo({
      url: '/pages/other/search/index',
    })
  },

  //上拉加载的勾子函数
  onReachBottom(){
    if(this.data.flag){
      this.setData({
         flag: false
      })
      let page = this.data.pageIndex + 1
      getGoodsDatas({ page: page }).then(res => {
        let datas = res.data
        if (datas.length === 0) {
          this.setData({
            addMore: false
          })
          return
        }
        this.setData({
          goodsDatas: this.data.goodsDatas.concat(datas),
          pageIndex: page,
          flag : true
        })
      })
    }
  },
  // 跳转到商品详情页
  gotoGoodsPage(opts){
    let id = opts.target.dataset.id
    let poster = opts.target.dataset.poster
    wx.navigateTo({
      url: `/pages/other/goods/index?goodsid=${id}&poster=${poster}`,
    })
  },
  sort(flag){
    if(flag === 0){
      
      // shengxu
    }else if(flag ==1){
      // jiangxu
    }else{
      // yuansuju 
    }
  }
})