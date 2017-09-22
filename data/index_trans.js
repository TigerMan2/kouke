var network = require('../utils/network.js');
var dataJson = require('../data_json/index.js');


// 获取截止当前时间数组
function getTimes(){
  var date = new Date()
  var hour = date.getHours()
  var times = []
  for (var i = 0; i <= hour; i++) {
    times[i] = formatNumber(i)
  }
  return times
  console.log('......' + times)
}

// 获取时间对应的value
function getValue(resData){
  var times = this.getTimes()
  var vList = []
  for (var v0 in times) {
    var tmp = times[v0]

    for (var v in resData) {
      var m = resData[v]
      if (tmp == m["k"]) {
        vList[v0] = m["v"]
        break;
      }

      vList[v0] = 0

    }
  }
  return vList
  console.log('根据时间获取到的value' + vList)
}

//格式化时间
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//获取首页数据
function getIndexData(){
  // network.GET(
    //   'http://192.168.1.37:8088/index',
    //   '',
    //   function (res) {
    //     //今日交易趋势折线图
    //     lineChart = wxChart.wxCharts(that.createSimulationData(index_trans.getTimes(), index_trans.getValue(res.data.todayTransGroupbyHour_Shutcutpay)), '成功交易', 'lineCanvas', 'line',false)
    //     //设置基础值
    //     that.setData({
    //       todayTrans: res.data.todayTrans
    //     })

    //   },
    //   function (errorRes) {
    //     console.log('获取失败的数据' + errorRes);
    //   }
    // )
  console.log('-----' + dataJson.index.data)
  return dataJson.index.data

}
//判断是升还是降
function IsUp(rate){
  if (parseFloat(rate) >= 0)
  {
    var value = '↑' + rate
    return {'key':true,'value':value}
  } else {
    var value = '↓' + Math.abs(parseFloat(rate)) + '%'
    return {'key': false, 'value': value }
  } 
}

module.exports = {
  getTimes: getTimes,
  getValue: getValue,
  getIndexData: getIndexData,
  IsUp: IsUp,
}