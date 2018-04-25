// pages/component/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newgn:[
      {
        url:"/pages/component/coupons/coupons",
        imgsrc:"/images/yhq.png",
        name:"优惠券"
      },
      {
        url: "../hykw/hykxq/hykxq",
        imgsrc: "/images/hyk.png",
        name: "会员卡"
      },
      {
        url: "../jf/wdjf/wdjf",
        imgsrc: "/images/wdjf.png",
        name: "我的积分"
      },
      {
        url: "../gq/gy/gy",
        imgsrc: "/images/wdgq.png",
        name: "我的供求"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  alertFun: function () {
    wx.showModal({
      title: '提示',
      content: "此功能还未开通",
    })
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

  },
  /***跳转** */

})