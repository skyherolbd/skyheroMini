// 注册小程序实例
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    //console.log(options);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //判断小程序的进入场景
    //console.log(options);
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
      default:
        break;
    }
    
    //1、获取用户信息并传递给后台
    wx.getUserInfo({
      success: function(res){
        // console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 定义全局变量
  globalData:{
    name: 'skyhero',
    age: 18
  }
})
