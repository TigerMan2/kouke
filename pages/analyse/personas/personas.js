// pages/analyse/personas/personas.js
// 在需要使用的js文件中，导入js  
var util = require('../../../utils/util.js'); 
var wxChart = require('../../../utils/wxChartComplete.js');

var lineChart = null;
var columnChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

    date: '',
    area: [
      {
        name: '5k-10k',
        data: 500,
      },
      {
        name: '5k以下',
        data: 2000,
      },
      {
        name: '10k-20k',
        data: 1500,
      },
      {
        name: '20k-50k',
        data: 1200,
      },
      {
        name: '50k以上',
        data: 1000,
      }
    ],
    sexs: [
      {
        name: '女性商户',
        data: 1000,
      }, {
        name: '男性商户',
        data: 1000,
      }],
    ages: [{
      name: '24岁以下',
      data: 1000,
    },
    {
      name: '24岁-30岁',
      data: 1000,
    },{
      name: '31岁-35岁',
      data: 1000,
    },
    {
      name: '36岁-40岁',
      data: 1000,
    },
    {
      name: '40岁以上',
      data: 1000,
    }
    ],
    bouns: [
      {
        area:'福建',
        num:'200',
        scale:'30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
      }, {
        area: '福建',
        num: '200',
        scale: '30%'
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
      date: dateTime
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    wxChart.wxconsume(this.data.area, 'ability');
    lineChart = wxChart.columnCharts(this.createSimulationData(), '时消费', 'time', 'column');
    wxChart.wxconsume(this.data.sexs, 'sex');
    wxChart.wxconsume(this.data.ages, 'age');
    columnChart = wxChart.columnCharts(this.createTransData(), '日消费', 'trans', 'column');

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
      yinlian: '61.21',//银联
      wx: '88.33',//微信
      zfb: '68.75',//支付宝
      qt: '41.71',//其他
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
    var data = [1, 1, 1, 1, 1, 1, 1, 1, 8.4, 1, 2, 4, 5, 2, 10, 15, 19, 1, 0, 0, 4, 2, 1, 1];
    return {
      categories: categories,
      data: data
    }
  }, 
  transtouchStart: function (e) {
    columnChart.scrollStart(e);
  },
  transmove: function (e) {
    columnChart.scroll(e);
  },
  transtouchEnd: function (e) {
    columnChart.scrollEnd(e);
    columnChart.showToolTip(e, {
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createTransData: function () {
    var categories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
    var data = [1, 1, 1, 1, 1, 1, 1, 1, 8.4, 1, 2, 4, 5, 2, 10, 15, 19, 1, 0, 0, 4, 2, 1, 1, 0, 0, 4, 2, 1, 1];
    return {
      categories: categories,
      data: data
    }
  },
})