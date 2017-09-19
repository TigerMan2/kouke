// pages/analyse/bill/bill.js

// 在需要使用的js文件中，导入js  
var util = require('../../../utils/util.js'); 
var wxChart = require('../../../utils/wxChartComplete.js');


var lineChart = null;
var startPos = null;


Page({

  /**
   * 页面的初始数据
   */
  data: {

    // tab切换  
    currentTab: 0,
    //记录单位
    unit:'时',
    //记录单位的数组
    units:['时','时','日','日','月'],
    //标头日期
    titleDate:'', 
    times0: ['1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12'],
    times1: ['1233.23', '32421.43', '2314.12', '1233.23', '32421.43', '2314.12', '1233.23']
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var nowDate = util.formatTime(new Date(),0);
    this.setData({
      titleDate:nowDate,
      times: this.data.times0
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

    lineChart = wxChart.wxCharts(this.createSimulationData(), '成功交易','billLine');
  
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

      var dat = wx.getStorageSync(e.target.dataset.current);
      if (!dat) {
        console.log('本地缓存没有数据')
        if (e.target.dataset.current == 2){
          wx.setStorageSync(e.target.dataset.current, this.data.times1)
          this.setData({
            times: this.data.times1
          });
        }else{
          wx.setStorageSync(e.target.dataset.current, this.data.times0)
          this.setData({
            times: this.data.times0
          });
        }
      } else {
        console.log('本地缓存有数据' + dat)
        this.setData({
          times: dat
        });
      }

      var nowDate = util.formatTime(new Date(), e.target.dataset.current);
      console.log('点击的tab' + e.target.dataset.current);
      that.setData({
        currentTab: e.target.dataset.current,
        unit: that.data.units[e.target.dataset.current],
        titleDate: nowDate
      })
    }
  },
  touchHandler: function (e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function (e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function (e) {
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时'];
    var data = [15, 20, 45, 37, 8, 20, 45, 37, 8, 20, 45, 37, 8, 20, 15, 20, 45, 37, 8, 20, 45, 37, 8, 20];
    return {
      categories: categories,
      data: data
    }
  },  
})