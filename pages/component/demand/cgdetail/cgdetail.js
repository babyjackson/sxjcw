// pages/component/store/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:1,
    length:null,
    ibanner: [
      {
        img: "/images/ibanner.jpg",
        url: ""
      },
      {
        img: "/images/ibanner.jpg",
        url: ""
      },
      {
        img: "/images/ibanner.jpg",
        url: ""
      }
    ],
    demand: [
      {
        tag: "求购",
        tit: "采购彩钢泡沫夹芯板",
        quantity: "800平方米",
        deadline: "3天",
        url: "/pages/component/demand/cgdetail/cgdetail",
        linkman: "刘先生"
      },
      {
        tag: "求购",
        tit: "采购彩钢泡沫夹芯板",
        quantity: "800平方米",
        deadline: "3天",
        url: "",
        linkman: "刘先生"
      },
      {
        tag: "求购",
        tit: "采购彩钢泡沫夹芯板",
        quantity: "800平方米",
        deadline: "3天",
        url: "",
        linkman: "刘先生"
      },
      {
        tag: "求购",
        tit: "采购彩钢泡沫夹芯板",
        quantity: "800平方米",
        deadline: "3天",
        url: "",
        linkman: "刘先生"
      }
    ]
  },
    
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let length = this.data.ibanner.length;
    this.setData({
      current: 1,
      length: length
    })

  },
  /**轮播current***/
  EventHandle:function(e){
    console.log(e)
    let current = e.detail.current+1;
    let length = e.currentTarget.dataset.length;
    this.setData({
      current:current,
      length:length
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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