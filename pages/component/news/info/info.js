// pages/component/news/info/info.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:{
      cur:0
    },
    infoban:[
      {
        img:"/images/ibaikeimg.jpg",
        url:"",
        tag:"装修案例",
        tit:"15个清新家告诉你什么是文艺范儿",
        tips:"教你文艺清新范儿做个森系真女神"
      },
      {
        img: "/images/ibaikeimg.jpg",
        url: "",
        tag: "装修案例",
        tit: "15个清新家告诉你什么是文艺范儿",
        tips: "教你文艺清新范儿做个森系真女神"
      },
      {
        img: "/images/ibaikeimg.jpg",
        url: "",
        tag: "装修案例",
        tit: "15个清新家告诉你什么是文艺范儿",
        tips: "教你文艺清新范儿做个森系真女神"
      }
    ],
    infoitem:[
      {
        img:"/images/allimg.png",
        tit:"盘点2017:苹果的十大标志性事件!",
        url:"/pages/component/news/article/article",
        visit:"19035"
      },
      {
        img: "/images/allimg.png",
        tit: "盘点2017:苹果的十大标志性事件!",
        url: "/pages/component/news/article/article",
        visit: "19035"
      },
      {
        img: "/images/allimg.png",
        tit: "盘点2017:苹果的十大标志性事件!",
        url: "",
        visit: "19035"
      },
      {
        img: "/images/allimg.png",
        tit: "盘点2017:苹果的十大标志性事件!",
        url: "",
        visit: "19035"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**导航切换***/
  changetab:function(e){
    let idx = e.target.dataset.index;
    let tabArr = this.data.tabArr;
    if(idx){
      tabArr.cur = idx;
      this.setData({
        tabArr:tabArr
      })
    }
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