// pages/component/gq/qgbj/qgbj.js
// pages/component/gq/fbgy/fbgy.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qgbj:{
      
    },
    region: ['江苏省', '南京市', '鼓楼区'],
    choosesrc: []
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

  },
  /***地区**/
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  /****选择图片 */
  chooseImage: function (event) {
    var that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],/****指定是原图还是压缩图，默认是二者都有 */
      sourceType: ['album', 'camera'],/****指定来源是相册还是相机，默认二者都有 */
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var imgeList = that.data.choosesrc.concat(res.tempFilePaths);
        //concat方法 是js的方法，用于连接两个或多个数组
        that.setData({
          choosesrc: imgeList
        })
      }
    })
  },
  // 删除图片
  deleteImg: function (e) {
    var choosesrc = this.data.choosesrc;
    var index = e.currentTarget.dataset.index;
    choosesrc.splice(index, 1);
    this.setData({
      choosesrc: choosesrc
    });
  },
  /***实现图片的预览***/
  previewImage: function (e) {
    var that = this,
        index = e.currentTarget.dataset.index,
        pictures = this.data.choosesrc;
        wx.previewImage({
          current: pictures[index],
          urls: pictures
        });
  },
  formSubmit: function (e) {
    var warn = "";
    var that = this;
    var flag = false;
    if (e.detail.value.addre == '0') {
      warn = "请选择您的所在区域";
    } else if (e.detail.value.door == "") {
      warn = "请输入您的具体地址";
    } else if (e.detail.value.price == "") {
      warn = "请输入价格";
    } else if (e.detail.value.title == "") {
      warn = "输入标题";
    } else if (e.detail.value.description == "") {
      warn = "请输入描述";
    } else if (e.detail.value.name == "") {
      warn = "请填写联系人！";
    } else if (e.detail.value.tel == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      warn = "手机号格式不正确";
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
})