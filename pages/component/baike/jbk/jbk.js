// pages/component/baike/jbk/jbk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedNav:0,
    bknav:[
      {
        nav:"最新"
      },
      {
        nav: "最新"
      },
      {
        nav: "最新"
      },
      {
        nav: "最新"
      }
    ],
    stopban:[
      {
        img:"/images/ibaikeimg.jpg",
        tag:"装修百科",
        url:""
      },
      {
        img: "/images/ibaikeimg.jpg",
        tag: "装修百科",
        url: ""
      },
      {
        img: "/images/ibaikeimg.jpg",
        tag: "装修百科",
        url: ""
      },
      {
        img: "/images/ibaikeimg.jpg",
        tag: "装修百科",
        url: ""
      }
    ],
    baike:[
      {
        tit:"女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag:"装修百科",
        nam:"200",
        url:"",
        img:"/images/ibaikeimg.jpg"
      },
      {
        tit: "女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag: "装修百科",
        nam: "200",
        url: "",
        img: "/images/ibaikeimg.jpg"
      },
      {
        tit: "女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag: "装修百科",
        nam: "200",
        url: "",
        img: "/images/ibaikeimg.jpg"
      },
      {
        tit: "女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag: "装修百科",
        nam: "200",
        url: "",
        img: "/images/ibaikeimg.jpg"
      },
      {
        tit: "女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag: "装修百科",
        nam: "200",
        url: "",
        img: "/images/ibaikeimg.jpg"
      },
      {
        tit: "女孩女孩女孩女孩女孩女孩女孩女孩女孩女孩",
        tag: "装修百科",
        nam: "200",
        url: "",
        img: "/images/ibaikeimg.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /***切换导航**/
  changenav:function(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      selectedNav:index
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
  
  }
})