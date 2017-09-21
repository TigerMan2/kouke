// pages/analyse/bonus/bonus.js
// 在需要使用的js文件中，导入js  
var util = require('../../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

    yinlian: '81.21',//银联
    wx: '66.33',//微信
    zfb: '48.75',//支付宝
    qt: '23.71',//其他

    changeNum:0,
    date:'',

    bouns:[
      {
        date:'09-18',
        yinlian:'85.32',
        wx:'85.32',
        zfb:'32.32',
        qt:'32.42'
      }, {
        date: '09-17',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }, {
        date: '09-16',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }, {
        date: '09-15',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }, {
        date: '09-14',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }, {
        date: '09-13',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }, {
        date: '09-12',
        yinlian: '85.32',
        wx: '85.32',
        zfb: '32.32',
        qt: '32.42'
      }
    ],
  
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

    var dateTime = util.changeMonth(new Date(), 3, this.data.changeNum);
    this.setData({
      date:dateTime
    })

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
  
  },
  /**
   * 上个月
   */
  back:function(){
    var dateTime = util.changeMonth(util.chaifen(this.data.date),0);
    this.setData({
      date: dateTime,
      yinlian: '12.21',//银联
      wx: '90.33',//微信
      zfb: '48.75',//支付宝
      qt: '99.71',//其他
    })
  },
  /**
   * 下个月
   */
  next:function(){
    var dateTime = util.changeMonth(util.chaifen(this.data.date), 1);
    this.setData({
      date: dateTime,
      yinlian: '61.21',//银联
      wx: '88.33',//微信
      zfb: '68.75',//支付宝
      qt: '41.71',//其他
    })
  },
})