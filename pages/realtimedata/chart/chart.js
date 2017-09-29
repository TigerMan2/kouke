// pages/chart/chart.js
var wxChart = require('../../../utils/wxChartComplete.js');
var network = require('../../../utils/network.js');
var index_trans = require('../../../data/index_trans.js');

var lineChart = null;
var startPos = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      id:options.id,
      title:options.title
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    this.request()
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
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
  //获取折线图的数组
  createSimulationData: function (times, vList) {
    var categories = times;
    var data = vList;
    return {
      categories: categories,
      data: data
    }
  },
  //加载请求
  request: function () {
    var that = this;
    network.GET(
      'index/succTransTrendByAppId?appId=' + this.data.id +'&token=' + wx.getStorageInfoSync('token'),
      '',
      function (res) {
        if (res.code == 0) {
          //折线图
          lineChart = wxChart.wxCharts(that.createSimulationData(index_trans.getTimes(), index_trans.getValue(res.data)), '成功交易', 'lineCanvas', 'line', true)
        } else {
          tools.showWithInfo(res.msg, function () {
            wx.redirectTo({
              url: '../../index/index',
            })
          })
        }
      },
      function (errorRes) {
        tools.showWithInfo('网络错误', function () { })
      }
    )
  },
})