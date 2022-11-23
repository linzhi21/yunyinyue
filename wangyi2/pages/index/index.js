// pages/index/index.js
import {reqBannerList, reqRecommend,reqRankList} from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
        bannerList:[],
        recommend:[],
        rankList:[]

  },

  //发送请求  获取轮播图
  async getBannerList(){
      try {
        const result =await reqBannerList()  //使用 await 加在函数之前 可以调用函数,取到promise的结果值
        // console.log(result);
        //设置新的状态,把获取到的数据给到 初始化数据,更新数据
        this.setData({
            bannerList:result.banners
        })
      } catch (error) {
          
      }
  },

  //发送请求  获取为你精心推荐 的数据
  async getRecommend(){
      const result = await reqRecommend(15)   //获取promise返回的结果值
      console.log(result);
      this.setData({
          recommend:result.result
      })
  },

  //发送请求  获取排行榜数据
  async getRankList(){
      let idx=0
      let rankListData=[]  //这里的 ranklist 是获取到的数据,整理之后组成的一个新的数组
      while(idx<4 ) {  //因为我们要获取 好几个榜单,所以要就行 for 循环
        const result = await reqRankList(idx++)
        console.log(result);
         //把获取到的数据  push到这里面  一会setdata修改 再把这个值赋值给初始值
         //我们不能对初始的数据,直接进行修改,只能通过 this.setData({}) 赋予
        rankListData.push({ 
            // id:result.playlist.id,
            name:result.playlist.name,
            //对榜单里面的歌曲数据  进行裁剪,遍历
            songList:result.playlist.tracks.slice(0,3).map(item=>{
                return {
                    // id:item.id,
                    name:item.name,
                    songImg:item.al.picUrl
                }
            })
        })
        this.setData({
            rankList:rankListData
        })
      }

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getBannerList()
      this.getRecommend()
      this.getRankList()

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