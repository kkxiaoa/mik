let URL = "https://easy-mock.com/mock/5cb68c827ccf7c060b2270da"
// let URL = 'http://192.168.120.40:9900'
// 获取轮播图的数据
export const getBannerData=()=>{
  return new Promise((resolve,reject)=>{
     wx.request({
       url: `${URL}/api/lunbo`,
       success:function(res){
         resolve(res.data)
       },
       fail:function(err){
         reject(err)
       }
     })
  })
}
// 获取新品的数据
export const getGoodsDatas = (data)=>{
  data = data || {}
  return new Promise((resolve,reject)=>{
     wx.request({
       url: `${URL}/api/newgoods`,
       data:data,
       success:function(res){
         resolve(res.data)
       },
       fail:function(err){
         reject(err)
       }
     })
  })
}

// 获取商品详情的方法
export const getGoodsInfo = (data)=>{
data = data || {}
return new Promise((resolve, reject) => {
  wx.request({
    url: `${URL}/api/goods`,
    data: data,
    success: function (res) {
      resolve(res.data)
    },
    fail: function (err) {
      reject(err)
    }
  })
})
}


// 获取分类列表的类别的数据
export const getCategoryData = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URL}/api/category`,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
// 获取分类列表数据详情
export const getCategoryItemsData = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${URL}/api/category/items`,
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}