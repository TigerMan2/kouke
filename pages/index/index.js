//index.js
//获取应用实例
var app = getApp()
//获取请求实例
var network = require('../../utils/network.js');
//获取验证实例
var reg = require('../../utils/tools.js'); 


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
  bindInLogin: function () {
    var that = this
    if (reg.IsPhoneNum(this.data.username) && reg.IsHavePsw(this.data.password)) {
      console.log('用户名：' + this.data.username + '密码：' + this.data.password)
      network.POST(
        'https://xcc.mypays.cn/login/byMobile',
        {
          'mobile': this.data.username,
          'password': this.data.password
        },
        function(res){
          console.log(res.msg)
          if (res.code == 0)
          {
            wx.setStorageSync('token', res.data.data)
            wx.switchTab({
              url: '../realtimedata/trans/trans',
            })

          }else
          {
            reg.showWithInfo(res.msg,null)
          }
        },
        function(errorRes){
          reg.showWithInfo('网络错误',null)
        }
      )
    }
  },
})
