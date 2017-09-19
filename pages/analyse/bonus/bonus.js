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
  back:function(){
    var newDate = this.chaifen();
    console.log(newDate);
    var dateTime = util.changeMonth(newDate,0);
    this.setData({
      date: dateTime
    })
  },
  next:function(){
    var newDate = this.chaifen();
    console.log(newDate);
    var dateTime = util.changeMonth(newDate, 1);
    this.setData({
      date: dateTime
    })
  },
  chaifen:function(){
    var that = this;
    var strs = new Array();
    strs = that.data.date.split('年');
    var month = strs[1];
    var months = new Array();
    months = month.split('月');
    var newYear = strs[0];
    var newMonth = months[0];
    // var timestamp2 = Date.parse(new Date(newYear + '-' + newMonth));
    console.log(newYear, newMonth);
    var newDate = new Date(newYear,newMonth);
    // newDate.setTime(timestamp2);
    console.log(newDate);
    return newDate;
  }
})