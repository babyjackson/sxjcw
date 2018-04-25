// pages/component/category/category.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:{
      cur:0
    },
    classifynav:[
      {
        navclass:"热搜推荐"
      },
      {
        navclass: "皮肤保养"
      },
      {
        navclass: "身体护理"
      },
      {
        navclass: "口腔护理"
      },
      {
        navclass: "头发护理"
      },
      {
        navclass: "胡须护理"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      },
      {
        navclass: "礼品/旅行"
      }
    ],
    classifyg:{
      lab:"热门搜索",
      banner:"/images/allimg.png",
      banurl:"",
      column:[
        {
          url:"",
          img:"/images/allimg.png",
          tit:"防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        },
        {
          url: "",
          img: "/images/allimg.png",
          tit: "防晒霜"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /***点击菜单**/
  navChange:function(e){
    const index = e.currentTarget.dataset.index;
    /***数据 */
    let classifynav = this.data.classifynav[index].navclass;
    let classifyg = this.data.classifyg;
    classifyg.lab = classifynav;
    this.setData({
      navArr: {cur: index},
      classifyg: classifyg
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