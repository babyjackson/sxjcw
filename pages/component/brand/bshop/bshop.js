// pages/component/brand/bshop/bshop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:{cur:0},
    brandt:{
      imgbg: "/images/ibaikeimg.jpg",
      logo: "/images/allimg.png",
      gsname: "高斯卫浴",
      num: "33",
      storetag:[
        {
          tag:"质量上乘"
        },
        {
          tag: "品质保证"
        },
        {
          tag: "良心商家"
        }
      ]
    },
    recommon: [
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tit: "英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price: "22.9"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /**切换**/
  changeTab:function(e){
    let cur = e.target.dataset.index;
    //let tabArr = this.data.tabArr.cur;
    if(cur){
      this.setData({
        tabArr: { cur: cur },
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