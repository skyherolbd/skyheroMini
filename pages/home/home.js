// 获取app的全局对象
const app = getApp();
//console.log(app.globalData);

// pages/home/home.js
Page({
// --------------------2、初始化数据--------------------
  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.name,
    students: [
    ],
    // counter: 0
  },
  // --------------------3、监听wxml中相关的事件--------------------
  /**
   * 定义计数方法
   */
  addCounterBth(){
    //对象值已改变但界面不刷新
    //this.data.counter += 1;
    //正确方式
    this.setData({
      counter: this.data.counter+1
    });
  },
  /**
   * 获取用户信息
   */
  getUserInfo(event){
    console.log(event);
  },
  outNameBtn(){
    console.log('名字被点击');
  },
  // --------------------4、监听其他事件--------------------
  // 监听页面滚动事件
  onPageScroll(obj){
    console.log(obj);
  },
  // 监听页面滚动到顶部事件
  onReachBottom(){
    console.log('页面滚动到顶部');
  },

  // --------------------1、监听页面的生命周期函数--------------------
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //获取当前page对象
    const _this=this;
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      // success: function(res){
      //   const dlist = res.data.data.list;
      //   _this.setData({
      //     students: dlist
      //   })
      // }
      success: (res) => {
        const dlist = res.data.data.list;
        // this.setData({
        //   students: dlist
        // });
      }
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
    console.log('页面下拉刷新');
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
  onTabItemTap: function(obj){
    console.log('点击当前tab时触发');
  }
})