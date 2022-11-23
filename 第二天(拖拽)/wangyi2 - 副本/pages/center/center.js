import request from '../../utils/request'
let startY = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    translateY:'', //初始化的平移的距离 为0  根据距离去进行拖拽?
    transition:''   //初始的过渡效果   后面要加过渡
  },

  //拖拽
  //手指按下
  handlerStart(event){
      //手指按下,获取手指的起始位置 changedTouches涉及到当前事件的 手指列表
      //一根手指  最后垂直坐标
       startY = event.changedTouches[0].clientY
       this.setData({
           transition:''  //过渡效果为空
       })
  },

  //手指滑动 都看做触发一次
  handlerMove(event){
      //手指移动的坐标
      let endY = event.changedTouches[0].clientY
      //计算出滑动的距离
      let dsxY = endY - startY

      //设置临界值
      if(dsxY<0){
          dsxY=0
      }else if(dsxY>250){
        dsxY=250
      }

      //设置dsxY样式  手指滑动移动的距离
        this.setData({
            translateY : dsxY + 'rpx'
        })
  },


  //触摸动作结束    
  handlerEnd(){
      this.setData({
          translateY:0, //触摸结束  平移的距离为   0
          transition:'transform ,1s'  //过渡
      })
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