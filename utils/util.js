function formatTime(date,style) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  if (style == 0)
  {
    return formatNumber(year) + '年' + formatNumber(month) + '月' + formatNumber(day) + '日'
  } else if (style == 1) {
    return year + '年' + month + '月' + (day - 1) + '日'
  } else if (style == 2) {
    return '近七天'
  } else if (style == 3) {
    return year + '年' + month + '月'
  } else if (style == 4) {
    return year + '年'
  }

}

function changeMonth(date,changeStyle,changeNum){
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  if (changeStyle == 0){
    var newMonth = month - 1
    if (newMonth == 0){
      return (year - 1) + '年12月'  
    }else{
      return year + '年' + newMonth + '月'
    }
  } else if (changeStyle == 1)
  {
    var newMonth = month + 1
    if (newMonth == 13) {
      return (year + 1) + '年01月'
    } else {
      return year + '年' + newMonth + '月'
    }
  }else{
    return year + '年' + month + '月'
  }
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  changeMonth:changeMonth
}
