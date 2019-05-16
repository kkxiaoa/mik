export const getAddress = ()=>{
  return new Promise((resolve,reject)=>{
    wx.getLocation({
       success:function(res){
         getLocation(res.latitude, res.longitude).then(res=>{
           resolve(res.data.result.formatted_address)
         })
       }
    })
  })
}

function getLocation(lat,lon){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `https://api.map.baidu.com/geocoder/v2/?ak=aVQOGjNyH7y3lruGeMPeEZukjvibuVKf&location=${lat},${lon}&output=json`,
      success: function (res) {
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}