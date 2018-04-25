// pages/component/gwc/gwc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],     //购物车列表
    hasList: false,//列表是否有数据
    totalPrice: "0",//总价初始为0
    selectAllStatus: true,//全选状态，默认全选
  },
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    this.setData({
      hasList: true,
      carts: [
        {
          storenav:"",
          storename:"阿玛尼",
          storeselect:"1",
          storegoods:[
            {
              id: 1,
              imggoods: "/images/allimg.png",
              num: "4",
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: "158.00",
              select: "1"
            },
            {
              id: 2,
              imggoods: "/images/allimg.png",
              num: "1",
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: "158.00",
              select: "1"
            }
          ]
        },
        {
          storenav: "",
          storename: "SK-II",
          storeselect: "1",
          storegoods: [
            {
              id: 3,
              imggoods: "/images/allimg.png",
              num: "4",
              tit: "碧生源减肥茶 2.5g/袋*15袋/盒...",
              price: "158.00",
              select: "1"
            }
          ]
        },
      ]
    });
    this.getTotalPrice();
  },
  //计算总价
  getTotalPrice: function () {
    //获取购物车列表
    let carts = this.data.carts;
    let total = 0;
    //let a = parseInt
    for (let i = 0; i < carts.length; i++) {
        let store = carts[i].storegoods;
        for (let j = 0; j < store.length;j++){
          if (store[j].select=="1"){
            total += parseInt(store[j].num) * parseFloat(store[j].price);//所有物价
            //console.log(total);
          }
        }
    }
    this.setData({
      carts: carts,
      totalPrice: total.toFixed(2) //
    })
  },
  //选择事件
  selectList: function (e) {//data-index
    const { index, parentIndex} = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    let carts = this.data.carts;
    let store = carts[parent].storegoods;
    const selected = store[child].select;
    store[child].select = selected=="1"? "0" :"1";
    if (store[child].select == "0"){
      carts[parent].storeselect = "0";
    }
    let truepush = [];
    for(let j=0;j<store.length;j++){
      let allture = store[j].select;
      if (allture == "1"){
        truepush.push(allture);
      }
    }
    if (store.length === truepush.length){
      carts[parent].storeselect = "1";
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //全选事件
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = selectAllStatus=="1" ? "0":"1";
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      let store = carts[i].storegoods;
      carts[i].storeselect = selectAllStatus;
      for(let j = 0;j<store.length;j++){
        store[j].select = selectAllStatus;
      }
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },
  /****店铺全选***/
  storeselectAll:function(e){
    let index = e.currentTarget.dataset.parentindex;
    let storeselect = this.data.carts[index].storeselect;
    this.data.carts[index].storeselect = storeselect==1 ? "0":"1";
    let carts = this.data.carts;
    let store = carts[index].storegoods;
    for(let j =0;j<store.length;j++){
      store[j].select = storeselect == 1 ? "0" : "1";;
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //增加数量
  addCount: function (e) {
    const { index, parentIndex } = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    let carts = this.data.carts;
    let store = carts[parent].storegoods;
    let num = parseInt(store[child].num);
    num = num + 1;
    store[child].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  //减少数量
  minusCount: function (e) {
    const { index, parentIndex } = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    let carts = this.data.carts;
    let store = carts[parent].storegoods;
    let num = parseInt(store[child].num);
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    store[child].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  //删除商品
  deleteList: function (e) {
    const { index, parentIndex } = e.currentTarget.dataset;
    let arr = e.currentTarget.dataset;
    let parent = arr.parentindex;
    let child = arr.index;
    let carts = this.data.carts;
    let store = carts[parent].storegoods;
    if (carts.length){
      store.splice(child, 1);
      this.setData({
        carts: carts
      });
      this.getTotalPrice();
      if (store.length==0) { // 不为空
        carts.splice(parent, 1)
        this.setData({
          carts: carts
        });   
      }
    }
    if (carts.length==0){
      this.setData({
        totalPrice: 0,
        selectAllStatus:false,
        hasList: false, // 修改标识为false，显示购物车为空页面
      }); 
    }
  },

  checkboxChange: function (e) {

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