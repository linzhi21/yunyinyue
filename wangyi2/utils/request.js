//二次封装 axios
function request(url,data={},method="GET"){
    return new Promise((resolve,reject)=>{
        wx.request({
          url:  'http://localhost:3000' + url,
          data,
          method,
          success:(res)=>{
              resolve(res.data) //调用resolve函数 拿到返回的数据
          },
          reject:(err)=>{
              reject(err)
          }
        })
    })
}
export default request