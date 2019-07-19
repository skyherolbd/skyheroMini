// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '../../assets/images/14224.jpg'
  },
  // 选择或拍照图片上传
  uploadPicBtn(){
    const _this = this;
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0];
        this.setData({
          imagePath: path
        })
      },
    })
  },
  // 图片加载后触发
  loadedImage(){
    //console.log('图片已加载');
  },
  handleFocus(event){
    console.log('输入框获取焦点', event);
  },
  handleInput(event) {
    console.log('输入框输入触发：' + event.detail.value, event);
  },
  handleBlur(event) {
    console.log('输入框失去焦点', event);
  },
  //滚动触发
  handleScroll(event){
    console.log('拉动滚动条', event);
  },
  //
  handleScrollUpper(event){
    console.log('已滚动到顶端', event);
  },
  handleScrollLower(event){
    console.log('已滚动到底端', event);
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