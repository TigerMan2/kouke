// pages/trans/trans.js
//获取请求实例
import NumberAnimate from "../../../common/NumberAnimate";
var network = require('../../../utils/network.js');
var wxChart = require('../../../utils/wxChartComplete.js');
var util = require('../../../utils/util.js');
var index_trans = require('../../../data/index_trans.js');
var tools = require('../../../utils/tools.js');

var lineChart = null;
var startPos = null;
var old_res = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换  
    currentTab: 0,
    currentTab1: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.request()
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
    this.request()
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
  animation:function(num){
    this.setData({
      transNo: 0
    });
    let transN = num;
    let n1 = new NumberAnimate({
      from:transN,//开始时的数字
      speed: 1500,// 总时间
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
          today_succ_transMoney_rate: old_res.today_succ_trans_money.today_succ_transMoney_rate
        });
      } else {
        that.setData({
          currentTab: e.target.dataset.current,
          today_succ_transMoney_rate: old_res.today_trans_amount_about.trans_amount_succ_today_paymethod_rate
        });
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
        var pieData = old_res.today_succ_trans_money.today_region_commercial_tenant_count_rate
      }else{
        var pieData = old_res.today_trans_amount_about.today_region_consumed_rate
      }
      that.setData({
        currentTab1: e.target.dataset.current,
      });
      wxChart.wxPieComplete(index_trans.createPieData(pieData), 'pieCanvas');
    }
  },
  /**
   * 查看图形化
   */
  checkChart:function(e){
    var $data = e.currentTarget.dataset
    wx.navigateTo({
      url: '../chart/chart?id=' + $data.id + '&title=' + $data.title,
    })
  }, 
  //获取折线图的数组
  createSimulationData: function (times,vList) {
    var categories = times;
    var data = vList;
    return {
      categories: categories,
      data: data
    }
  },
  //加载请求
  request:function(){
    var that = this;
    network.GET(
      'index?token=' + wx.getStorageSync('token'),
      // 'http://192.168.1.37:8666/index',
      '',
      function (res) {
        if (res.code == 0){
          old_res = res.data
          that.getData(res.data)
        }else
        {
          tools.showWithInfo(res.msg,function(){
            wx.redirectTo({
              url: '../../index/index',
            })
          })
        }
      },
      function (errorRes) {
        tools.showWithInfo('网络错误', function(){})
      }
    )
  },
  //获取数据
  getData: function (res){
    // res = index_trans.getIndexData()
    if (res == null){
      return
    }
    
    this.animation(parseFloat(res.today_succ_trans_money.today_succ_transMoney))
    //折线图
    lineChart = wxChart.wxCharts(this.createSimulationData(index_trans.getTimes(), index_trans.getValue(res.today_succ_trans_trend)), '成功交易', 'lineCanvas', 'line', false)
    //饼状图
    var pieData = res.today_succ_trans_money.today_region_commercial_tenant_count_rate
    wxChart.wxPieComplete(index_trans.createPieData(pieData),'pieCanvas');
    this.setData({
      //发起交易订单
      allTrans: res.today_trans_amount_about.trans_amount_today,
      //成功交易订单
      succTrans: res.today_trans_amount_about.trans_amount_succ_today,
      //交易成功率
      succTrans_rate: res.today_trans_amount_about.trans_amount_succ_today_rate,
      //发起交易增长率
      allTrans_growRate: index_trans.IsUp(res.today_trans_amount_about.trans_amount_growth_rate),
      //成功交易增长率
      succTrans_growRate: index_trans.IsUp(res.today_trans_amount_about.trans_amount_succ_growth_rate),
      //交易成功增长率
      succTrans_growRatediff: index_trans.IsUp(res.today_trans_amount_about.trans_amount_succ_ratediff),
      //支付申请
      payRequest: res.today_trans_amount_about.trans_amount_today_pay_request,
      //支付处理中
      paySubmit: res.today_trans_amount_about.trans_amount_today_pay_submit,
      //支付失败
      payFail: res.today_trans_amount_about.trans_amount_today_pay_fail,
      //提现成功
      withdrawSucc: res.today_trans_withdrawals_amount_about.trans_amount_today_pay_succWithdraw,
      //提现失败
      withdrawFail: res.today_trans_withdrawals_amount_about.trans_amount_today_pay_failWithdraw,
      //提现申请
      withdrawRequest: res.today_trans_withdrawals_amount_about.trans_amount_today_pay_requestWithdraw,
      //提现处理中
      withdrawSubmit: res.today_trans_withdrawals_amount_about.trans_amount_today_pay_submitWithdraw,
      //提现成功率
      withdrawSucc_rate: index_trans.IsUp(res.today_trans_withdrawals_amount_about.trans_amount_today_pay_succWithdraw_rate),
      //今日单商户最高消费
      today_consumed_top: res.today_consumed_commercial_tenant_top_one,
      //人均日消费金额
      avg_succ_trans:res.today_succ_trans_money.avg_succ_trans,
      //今日新入网人数
      new_online: res.today_new_online_commercial_tenant,
      //人均日消费次数
      trans_amount: res.today_trans_amount_about.avg_succ_trans_amount,
      //支付方式占比
      today_succ_transMoney_rate: res.today_succ_trans_money.today_succ_transMoney_rate,
      //合作机构
      organization: index_trans.getOrgation(res),
    })
  }

})