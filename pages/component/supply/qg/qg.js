// pages/component/gq/gy/gy.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr: { curHdIndex: 0, curBdIndex: 0 },
    gyli: [
      {
        imgsrc: "/images/allimg.png",
        tit: "急求正宗长白山药谷丁香茶丁香茶 养胃野生红茶…",
        editorurl: ""
      },
      {
        imgsrc: "/images/allimg.png",
        tit: "急求正宗长白山药谷丁香茶丁香茶 养胃野生红茶…",
        editorurl: ""
      }
    ],
    delBtnWidth: 300
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  navturn: function () {
    wx.redirectTo({
      url: "/pages/component/supply/gy/gy"
    })
  },
  navFun:function(e){
    wx:wx.navigateTo({
      url: '../qgbj/qgbj',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /***手指放到屏幕触发 */
  touchS: function (e) {
    console.log(e);
    /**判断是否只有一个触摸点**/
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      })
    }
  },
  /**触摸时触发，手指在屏幕上每移动一次，触发一次** */
  touchM: function (e) {
    var that = this;
    if (e.touches.length == 1) {
      /****获取触摸点x坐标 */
      var moveX = e.touches[0].clientX;
      /**计算差值 **/
      var disX = that.data.startX - moveX;
      //delBtnWidth 为右侧按钮区域的宽度
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0rpx";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "rpx";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "rpx";
        }
      }
      //获取手指触摸的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.gyli;
      //将拼接好的样式设置到当前item中
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        gyli: list
      });
    }
  },
  touchE: function (e) {
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = that.data.gyli;
      list[index].txtStyle = txtStyle;
      that.setData({
        gyli: list
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /***删除功能***/
  delItem: function (e) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否删除？',
      success: function (res) {
        if (res.confirm) {
          //获取列表中要删除项的下标  
          var index = e.target.dataset.index;
          var list = that.data.gyli;
          //移除列表中下标为index的项  
          list.splice(index, 1);
          //更新列表的状态  
          that.setData({
            gyli: list
          });
        }
      }
    })
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
  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = _datasetId;
    _obj.curBdIndex = _datasetId;
    if (!isNaN(_datasetId)) {
      this.setData({
        tabArr: _obj
      });
    }
  }
})