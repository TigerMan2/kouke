// pages/trans/trans.js
//获取请求实例
var network = require('../../utils/network.js');
import NumberAnimate from "../../common/NumberAnimate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换  
    currentTab: 0,
    currentTab1: 0,

    yinlian:'41.21',//银联
    wx:'26.33',//微信
    zfb:'18.75',//支付宝
    qt:'13.71',//其他

    organization:[{
      organizationName:'百付',
      trans:'¥34242142.00',
      rate:'2.83%',
    }, {
      organizationName: '乐汇通',
      trans: '¥342442.00',
      rate: '6.83%',
      }, {
        organizationName: 'E收银',
        trans: '¥3424142.00',
        rate: '6.34%',
    }, {
      organizationName: '睿付',
      trans: '¥34242142.00',
      rate: '2.83%',
      }, {
        organizationName: '合利宝',
        trans: '¥34242142.00',
        rate: '2.83%',
    }, {
      organizationName: '银商天下',
      trans: '¥34242142.00',
      rate: '2.83%',
      }, {
        organizationName: '百付',
        trans: '¥34242142.00',
        rate: '2.83%',
      }],

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
    
    this.animation();
    
    this.wxChartComplete();

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
    
    var that = this;

    wx.showNavigationBarLoading();
    wx.stopPullDownRefresh();

    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.animation();
      that.wxChartComplete();
    },1000);
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
   * 数字动画实现
   */
  animation:function(){
    this.setData({
      transNo: ''
    });
    let transNo = 26853245.65;
    let n1 = new NumberAnimate({
      from: transNo,//开始时的数字
      speed: 1000,// 总时间
      refreshTime: 100,//  刷新一次的时间
      decimals: 2,//小数点后的位数
      onUpdate: () => {//更新回调函数
        this.setData({
          transNo: '¥' + n1.tempValue
        });
      }
    });
  },
  /**
   * 折线图显示实现
   */
  wxChartComplete:function(){
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    var Charts = require('../../dist/wxcharts.js');
    new Charts({
      canvasId: 'firstCanvas',
      type: 'line',
      categories: ['18日', '19日', '20日', '21日', '22日', '23日', '今日'],
      series: [{
        name: '成功交易',
        data: [62, 103,135, 57, 96, 116, 77],
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
  /**
   * 支付方式
   * 点击切换tabbar
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      if (e.target.dataset.current == 0) {
        that.setData({
          currentTab: e.target.dataset.current,
          yinlian: '41.21',//银联
          wx: '26.33',//微信
          zfb: '18.75',//支付宝
          qt: '13.71',//其他
        });
        console.log('11111111');
      } else {
        that.setData({
          currentTab: e.target.dataset.current,
          yinlian: '80.21',//银联
          wx: '46.33',//微信
          zfb: '65.75',//支付宝
          qt: '12.71',//其他
        });
        console.log('11111111');
      }
    }
  },
  /**
   * 地区占比
   * 点击切换tabbar
   */
  swichTab: function (e) {

    var that = this;

    if (this.data.currentTab1 === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab1: e.target.dataset.current,
      });
    }
  },
  /**
   * 查看图形化
   */
  checkChart:function(){
    wx.navigateTo({
      url: '../chart/chart',
    })
  } 

})