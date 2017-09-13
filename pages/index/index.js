//index.js
//获取应用实例
var app = getApp()
//获取请求实例
var network = require('../../utils/network.js');
Page({
  data: {
    // 用户名
    username: '',
    //密码
    password: '',
  },
  onLoad: function () {
    

  },
  //获取用户名
  getUsername: function (e) {
    var that = this;
    that.setData({
      username: e.detail.value
    })
  },
  //获取密码
  getPassword: function (e) {
    var that = this;
    that.setData({
      password: e.detail.value
    })
  },
  //验证手机号
  validateMobile: function () {
    if (this.data.username.length == 0) {
      wx.showModal({
        title: '请输入手机号',
      })
      return false;
    }
    var regM = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!regM.test(this.data.username)) {
      wx.showModal({
        title: '手机号有误',
      })
      return false;
    }
    return true;
  },
  isHavePsw: function () {
    if (this.data.password.length == 0) {
      wx.showModal({
        title: '请输入密码',
      })
      return false;
    }
    return true;
  },
  bindInLogin: function () {
    // if (this.validateMobile() && this.isHavePsw()) {
    wx.switchTab({
      url: '../realtimedata/trans/trans',
    })
    }
  // }
})
