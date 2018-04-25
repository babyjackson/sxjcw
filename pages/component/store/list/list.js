// pages/component/store/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedNav: 0,
    listData: [
      {
        nav: '瓷砖地板',
        selectedItem: '',
      },
      {
        nav: '卫浴大全',
        selectedItem: '',
        data: [
          {
            title: '标题文字3'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '电灯电料',
        selectedItem: '',
        data: [
          {
            title: '标题文字4'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题图片',
          },
          {
            title: '标题图片',
          },
          {
            title: '标题图片',
          },
          {
            title: '标题图片',
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '电灯电料',
        selectedItem: '',
        data: [
          {
            title: '标题文字4'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
      {
        nav: '电灯电料',
        selectedItem: '',
        data: [
          {
            title: '标题文字4'
          },
          {
            title: '标题图片',
          },
          {
            title: '标题文字',
          }
        ]
      },
    ],
    wander: [
      {
        img: "/images/allimg.png",
        url: "/pages/component/store/detail/detail",
        tit: "今之逸品抽取式美容，美容",
        xpri: "23.50",
        ypri: "25.00"
      },
      {
        img: "/images/allimg.png",
        url: "/pages/component/store/detail/detail",
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
    var cData = "listData[" + 1 + "].data";
    console.log(cData)
    var datas = [
      {
        title: '标题文字9'
      },
      {
        title: '标题图片',
      },
      {
        title: '标题文字',
      }
    ];
    console.log(datas);
    this.setData({ //再set值
      [cData]: datas
    })
  },
  /**点击出现下拉**/
  _onNavItemTap(e) {
    const index = e.currentTarget.dataset.index;
    if (this.onDropdownNavItemTap) {
      this.onDropdownNavItemTap(e, index);
    } else {
      console.warn('no onDropdownNavItemTap method');
    }
  },
  /**点击值***/
  _catchListItemTap(e) {
    const { index, parentindex, title } = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    //console.log(parent);
    //console.log(child);
  },
  /***设置selected**/
  onDropdownNavItemTap(e, index) {
    const { selectedNav } = this.data;
    this.setData({
        selectedNav: index
      });
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