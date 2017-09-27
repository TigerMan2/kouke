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
  // var resData = null
  // return resData
  // return dataJson.index.data

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

//处理合作机构的数组
function getOrgation(res){
  var resData = res.today_agent_trans
  if (resData[0]['g']['value']){
    return resData
  } 
  for (var v in resData){
    var orgation = resData[v]
    if (parseFloat(orgation['g']) >= 0)
    {
      var value = '↑' + orgation['g'] 
      orgation['g'] = { 'key': true, 'value': value }
    }else
    {
      var value = '↓' + Math.abs(parseFloat(orgation['g'])) + '%'
      orgation['g'] = { 'key': false, 'value': value }
    }
    resData[v] = orgation
    console.log('获取到的数据：' + orgation['g']['key'])
  }
  return resData
}

//获取饼状图的数组
function createPieData(resData){
  var series = new Array()
  for (var v in resData)
  {
    var series_data = {}
    series_data = {
      name: resData[v]['k'],
      data: parseFloat(resData[v]['v']),
    }
    series.push(series_data)
    console.log('+++++++' + series_data)
  }
  return series
}


module.exports = {
  getTimes: getTimes,
  getValue: getValue,
  getIndexData: getIndexData,
  IsUp: IsUp,
  getOrgation: getOrgation,
  createPieData: createPieData,
}