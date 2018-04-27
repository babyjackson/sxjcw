// pages/component/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoptab:{
      cur:0
    },
    ibanner:[
      {
        img:"/images/ibanner.jpg",
        url:""
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
    inav:[
      {
        url:"/pages/component/store/mall/mall",
        ico:"/images/inav1.png",
        tit:"建材商城"
      },
      {
        url: "/pages/component/baike/jbk/jbk",
        ico: "/images/inav2.png",
        tit: "建材百科"
      },
      {
        url: "/pages/component/stylist/cover/cover",
        ico: "/images/inav3.png",
        tit: "设计师"
      },
      {
        url: "/pages/component/brand/blist/blist",
        ico: "/images/inav4.png",
        tit: "建材品牌"
      },
      {
        url: "/pages/component/beauty/picture/picture",
        ico: "/images/inav5.png",
        tit: "美图欣赏"
      },
      {
        url: "/pages/component/news/info/info",
        ico: "/images/inav6.png",
        tit: "资讯中心"
      },
      {
        url: "/pages/component/investment/investment",
        ico: "/images/inav7.png",
        tit: "招商入驻"
      },
      {
        url: "/pages/component/demand/sdemand/sdemand",
        ico: "/images/inav8.png",
        tit: "建材供求"
      }
    ],
    latest:[
      {
        img:"/images/allimg.png",
        url:"",
        yprice:"22.9",
        xprice:"9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.9",
        xprice: "9.90"
      }
    ],
    hottest:[
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      },
      {
        img: "/images/allimg.png",
        url: "",
        yprice: "22.1",
        xprice: "9.90"
      }
    ],
    coupons: [
      {
        man: 20,
        price: 2,
        datestart: "2018-4-10",
        dateend: "2018-4-20"
      },
      {
        man: 200,
        price: 20,
        datestart: "2018-4-10",
        dateend: "2018-4-20"
      },
      {
        man: 200,
        price: 20,
        datestart: "2018-4-10",
        dateend: "2018-4-20"
      },
      {
        man: 700,
        price: 200,
        datestart: "2018-4-10",
        dateend: "2018-4-20"
      }
    ],
    eshoplist:[
      {
        url:"",
        img:"/images/allimg.png",
        tit:"150只全新料结",
        yprice:"29.9",
        xprice:"9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      },
      {
        url: "",
        img: "/images/allimg.png",
        tit: "150只全新料结",
        yprice: "29.9",
        xprice: "9.90"
      }
    ],
    bktag:[
      {
        tag:"预算",
        url:""
      },
      {
        tag: "环保",
        url: ""
      },
      {
        tag: "健康",
        url: ""
      },
      {
        tag: "流程工艺",
        url: ""
      }
    ],
    baike:{
      url:"",
      tips:"流程工艺",
      tit:"在北京带着新生儿买房、装修、搬家…",
      pname:"山西建材平台",
      time:"1月20日"
    },
    brandban:[
      {
        logo:[
          {
            url:"",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          }
        ]
      },
      {
        logo: [
          {
            url: "",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          },
          {
            url: "",
            img: "/images/allimg.png"
          }
        ]
      }
    ],
    gbrand:[
      {
        goods:"/images/allimg.png",
        gurl:"",
        brand:"/images/allimg.png",
        burl: "",
        bname:"箭牌卫浴"
      },
      {
        goods: "/images/allimg.png",
        gurl: "",
        brand: "/images/allimg.png",
        burl: "",
        bname: "箭牌卫浴"
      },
      {
        goods: "/images/allimg.png",
        gurl: "",
        brand: "/images/allimg.png",
        burl: "",
        bname: "箭牌卫浴"
      }
    ],
    inform:[
      {
        img:"/images/ibaikeimg.jpg",
        url:"",
        tag:"装修案例",
        tit:"知音 | 家的N种模样",
        tips:"知音 | 家的N种模样",
        time:"12月22日",
        zan:"34"
      },
      {
        img: "/images/ibaikeimg.jpg",
        url: "",
        tag: "装修案例",
        tit: "知音 | 家的N种模样",
        tips: "知音 | 家的N种模样",
        time: "12月22日",
        zan: "34"
      },
      {
        img: "/images/ibaikeimg.jpg",
        url: "",
        tag: "装修案例",
        tit: "知音 | 家的N种模样",
        tips: "知音 | 家的N种模样",
        time: "12月22日",
        zan: "34"
      },
      {
        img: "/images/ibaikeimg.jpg",
        url: "",
        tag: "装修案例",
        tit: "知音 | 家的N种模样",
        tips: "知音 | 家的N种模样",
        time: "12月22日",
        zan: "34"
      }
    ],
    recommon:[
      {
        img:"/images/allimg.png",
        url:"",
        tit:"英国进口 果悠翠樱桃车里子夹心酸奶图层饼干",
        price:"22.9"
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**切换**/
  changeTab:function(e){
    let that = this;
    let idx = e.target.dataset.index;
    let cur = parseInt(idx);
    let shoptab = that.data.shoptab;
    //console.log(cur)
    if (cur == 0 || cur == 1){
      shoptab.cur = cur;
      this.setData({
        shoptab: shoptab
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