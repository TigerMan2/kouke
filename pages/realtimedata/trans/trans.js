// pages/trans/trans.js
//获取请求实例
var network = require('../../../utils/network.js');
import NumberAnimate from "../../../common/NumberAnimate";
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
    area: [{
      name: '福建',
      num: 1200
    },
    {
      name: '河南',
      num: 1200
    },
    {
      name: '江西',
      num: 1200
    },
    {
      name: '上海',
      num: 1200
    },
    {
      name: '北京',
      num: 1200
    },
    {
      name: '其他',
      num: 1200
    }]

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

    this.wxPieComplete();

    lineChart = wxChart.wxCharts(this.createSimulationData(), '成功交易', 'lineCanvas');

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

    wx.stopPullDownRefresh();

    setTimeout(function(){
      that.animation();
      lineChart = wxChart.wxCharts(that.createSimulationData(), '成功交易', 'lineCanvas');
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
      if (e.target.dataset.current == 0){
        that.setData({
          currentTab1: e.target.dataset.current,
          area: [
            {
              name: '福建',
              num: 1200
            },
            {
              name: '河南',
              num: 1200
            },
            {
              name: '江西',
              num: 1200
            },
            {
              name: '上海',
              num: 1200
            },
            {
              name: '北京',
              num: 1200
            },
            {
              name: '其他',
              num: 1200
            }
          ]
        });
      }else{
        that.setData({
          currentTab1: e.target.dataset.current,
          area: [
            {
              name: '广州',
              num: 1500
            },
            {
              name: '重庆',
              num: 1300
            },
            {
              name: '深圳',
              num: 1000
            },
            {
              name: '河北',
              num: 800
            },
            {
              name: '海南',
              num: 600
            },
            {
              name: '其他',
              num: 100
            }
          ]
        });
      }
      this.wxPieComplete();
    }
  },
  /**
   * 查看图形化
   */
  checkChart:function(){
    wx.navigateTo({
      url: '../chart/chart',
    })
  }, 
  /**
   * 区域图占比
   */
  wxPieComplete:function(){
    var that = this;
    console.log('数据' + that.data.area[3].num);
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    var Charts = require('../../../dist/wxcharts.js');
    new Charts({
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: that.data.area[0].name,
        data: that.data.area[0].num,
        format: function (val) {
          return that.data.area[0].name +val.toFixed(2) + '万';
        }
      }, {
        name: that.data.area[1].name,
        data: that.data.area[1].num,
        format: function (val) {
          return that.data.area[1].name +val.toFixed(2) + '万';
        }
        }, {
          name: that.data.area[2].name,
          data: that.data.area[2].num,
          format: function (val) {
            return that.data.area[2].name +val.toFixed(2) + '万';
          }
      }, {
        name: that.data.area[3].name,
        data: that.data.area[3].num,
        format: function (val) {
          return that.data.area[3].name +val.toFixed(2) + '万';
        }
        }, {
          name: that.data.area[4].name,
          data: that.data.area[4].num,
          format: function (val) {
            return that.data.area[4].name + val.toFixed(2) + '万';
          }
      }, {
        name: that.data.area[5].name,
        data: that.data.area[5].num,
        format: function (val) {
          return that.data.area[5].name + val.toFixed(2) + '万';
        }
      }],
      width: windowWidth,
      height: 300,
    })
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