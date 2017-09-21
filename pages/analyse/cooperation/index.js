// pages/analyse/cooperation/index.js
var util = require('../../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {

    date:'',
    organization: [{
      organizationName: '百付',
      trans: '¥34242142.00',
      rate: '2.83%',
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

    var dateTime = util.changeMonth(new Date(), 3, this.data.changeNum);
    this.setData({
      date: dateTime
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
   * 查看图形化
   */
  checkChart: function () {
    wx.navigateTo({
      url: '../bill/bill?page_id=1',
    })
  },
  /**
   * 上个月
   */
  back: function () {
    var dateTime = util.changeMonth(util.chaifen(this.data.date), 0);
    this.setData({
      date: dateTime,
    })
  },
  /**
   * 下个月
   */
  next: function () {
    var dateTime = util.changeMonth(util.chaifen(this.data.date), 1);
    this.setData({
      date: dateTime,
    })
  },
})