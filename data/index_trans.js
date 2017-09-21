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

module.exports = {
  getTimes: getTimes,
  getValue: getValue,
}