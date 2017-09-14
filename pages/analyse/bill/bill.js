// pages/analyse/bill/bill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // tab切换  
    currentTab: 0, 
    times: ['1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12']
  
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

    this.wxChartComplete();
  
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
  
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 折线图显示实现
   */
  wxChartComplete: function () {
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    var Charts = require('../../../dist/wxcharts.js');
    new Charts({
      canvasId: 'billLine',
      type: 'line',
      categories: ['0时', '1时', '2时', '3时', '4时', '5时', '06时', '7:00', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'],
      series: [{
        name: '成功交易1',
        data: [15, 20, 45, 37, 8, 20, 45, 37, 8, 20, 45, 37, 8, 20, 15, 20, 45, 37, 8, 20, 45, 37, 8, 20],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '交易量(万)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 300,
    })
  },  
})