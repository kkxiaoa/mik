// 获取当前存储的购物车数量
export const getCartCountFromStorage = function () {
  let cart = wx.getStorageSync('cartGoods')
  cart = JSON.parse(cart)
  // 将cart转为对象后开始遍历求count值
  let count = 0
  cart.forEach((item) => {
    count += item.count
  })
  return count
} 