// pages/component/stylist/sdetail/sdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    designer:{
      photo:"/images/photo.jpg",
      name:"胡一天",
      sex:"男",
      region:"江苏省 南京市",
      point:"服务朋友 设计生活",
      bgimg:"/images/ibaikeimg.jpg"
    },
    dpdesigns: [
      {
        img: "/images/allimg.png",
        name: "胡一天",
        workyear: "9",
        spoint: "服务朋友，设计生活",
        hits: "22222",
        url: ""
      },
      {
        img: "/images/allimg.png",
        name: "胡一天",
        workyear: "9",
        spoint: "服务朋友，设计生活",
        hits: "22222",
        url: ""
      },
      {
        img: "/images/allimg.png",
        name: "胡一天",
        workyear: "9",
        spoint: "服务朋友，设计生活",
        hits: "22222",
        url: ""
      }
    ]
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
  /* 回到顶部 */
  goTop: function (e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
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