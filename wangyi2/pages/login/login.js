import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:''
  },

  // 输入手机和密码，收集
  handlerInput(event){
    let type = event.currentTarget.id
    const value = event.detail.value
    this.setData({
      [type]:value 
      // phone/password : value
    })
    // []语法：
    // 点语法和[]语法
    // [] 1、取值（拿变量当中或者表达式的值）2、拿到值再次和外部组成新语法
  },

  // handlerInput2(event){
  //   const value = event.detail.value
  //   this.setData({
  //     password:value
  //   })
  // },

  // 点击登录的逻辑
  login(){
    let {phone,password} = this.data
    if(!/^1[3-9]\d{9}$/.test(phone)){
      // 弹出消息
      wx.showToast({
        title: '手机号不合法',
      })
      return 
    }

    if(!/^\w{6,20}$/.test(password)){
      wx.showToast({
        title: '密码不合法',
      })
      return 
    }

    let userInfo = {
      userId: 322314088,
      nickname: "那夜里凄凉",
      avatarUrl: "https://p2.music.126.net/6XEjgMiyEHnuwF73KBPpxg==/109951165937638648.jpg"
    }

    // 同步把信息保存到storage，
    wx.setStorageSync('userInfo_key',userInfo)
    // 跳转到个人中心页面
    wx.reLaunch({
      url: '/pages/center/center',
    })
    // 发请求
    // const result = await request('/login/cellphone',{phone,password,isLogin:true})
    // if(result.code === 200){
    //   console.log(result)
    //   //保存用户信息在storage
    //   wx.setStorageSync('userInfo_key', result.profile)
    //   // 返回到个人中心页面进行展示
    //   // wx.navigateTo({
    //   //   url: '/pages/center/center',
    //   // })
    //   wx.reLaunch({
    //     url: '/pages/center/center',
    //   })
    // }else if(result.code === 400){
    //   wx.showToast({
    //     title: '用户名错误',
    //   })
    // }else if(result.code === 502){
    //   wx.showToast({
    //     title: '密码错误',
    //   })
    // }else if(result.code === 501){
    //   wx.showToast({
    //     title: '账号不存在',
    //   })
    // }else{
    //   wx.showToast({
    //     title: '未知错误',
    //   })
    // }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})