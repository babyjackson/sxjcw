// pages/component/wdsc/wdsc.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:{current:0},
    collect: [
      {
        goodsimg: "/images/allimg.png",
        goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风1",
        sj: "¥200",
      },
      {
        goodsimg: "/images/allimg.png",
        goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风2",
        sj: "¥200",
      },
      {
        goodsimg: "/images/allimg.png",
        goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风3",
        sj: "¥200",
      }
    ],
    wander: [
      {
        img: "/images/allimg.png",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        xpri: "23.50",
        ypri: "25.00"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        xpri: "23.50",
        ypri: "25.00"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        xpri: "23.50",
        ypri: "25.00"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "今之逸品抽取式美容，美容",
        xpri: "23.50",
        ypri: "25.00"
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
  /***删除**/
  scdeleted:function(e){
    let collect = this.data.collect;
    let idx = e.currentTarget.dataset.index;
    collect.splice(idx,1);
    this.setData({
      collect:collect
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  /****
   * 点击切换
   */
  navFun:function(e){
    var _datasetId = e.target.dataset.index;
    var _obj = {};
    _obj.current = _datasetId;
    if (_datasetId){
      this.setData({
        tabArr: _obj
      });
    }
   
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