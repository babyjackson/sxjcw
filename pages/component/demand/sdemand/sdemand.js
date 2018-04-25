// pages/component/demand/sdemand/sdemand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArr:{cur:0},
    sban:[
      {
        url:"",
        img:"/images/sdemand.jpg"
      },
      {
        url: "",
        img: "/images/sdemand.jpg"
      },
      {
        url: "",
        img: "/images/sdemand.jpg"
      }
    ],
    supply:[
      {
        img:"/images/allimg.png",
        url:"",
        tag:"供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman:"刘先生",
        way:"电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      },
      {
        img: "/images/allimg.png",
        url: "",
        tag: "供应",
        tit: "油烟机批发经销火王厨电加盟火王油烟机T型油烟机 D12",
        linkman: "刘先生",
        way: "电议"
      }
    ],
    demand:[
      {
        tag:"求购",
        tit:"采购彩钢泡沫夹芯板",
        quantity:"800平方米",
        deadline:"3天",
        url:"",
        linkman:"刘先生"
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

  },
  /***tab切换**/
  changeTab:function(e){
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