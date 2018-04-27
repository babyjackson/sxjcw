// pages/component/investment/investment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  formSubmit: function (e) {
    var warn = "";
    var that = this;
    var flag = false;
    if (e.detail.value.shname == "") {
      warn = "请填写商户名称！";
    } else if (e.detail.value.zitem == "") {
      warn = "请填写主要经营的项目！";
    } else if (e.detail.value.intro == "") {
      warn = "请简单介绍下商户！";
    } else if (e.detail.value.contact == "") {
      warn = "请填写联系人！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.firm == "") {
      warn = "请输入企业名称！";
    } else if (e.detail.value.name == "") {
      warn = "请输入您的姓名！";
    } else if (e.detail.value.wx == "") {
      warn = "请输入您的微信！";
    } else if (e.detail.value.icard == "") {
      warn = "请输入您的身份证号码！";
    } else {
      flag = true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)

    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: warn
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