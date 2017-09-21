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
    return formatNumber(year) + '年' + formatNumber(month) + '月'
  } else if (style == 4) {
    return formatNumber(year) + '年'
  }

}

function changeMonth(date,changeStyle){
  var year = date.getFullYear()
  var month = date.getMonth() + 1;
  console.log('获取到的月份' + month);
  if (changeStyle == 0){
    var newMonth = month - 1

    console.log('获取到的年：'+year + '获取到的月:'+newMonth);
    if (newMonth == 0){
      newMonth = 12;
      return formatNumber((year - 1)) + '年' + newMonth + '月'  
    }else{
      return formatNumber(year) + '年' + formatNumber(newMonth) + '月'
    }
  } else if (changeStyle == 1)
  {
    var newMonth = month + 1
    if (newMonth == 13) {
      return (year + 1) + '年01月'
    } else {
      return formatNumber(year) + '年' + formatNumber(newMonth) + '月'
    }
  }else{
    return formatNumber(year) + '年' + formatNumber(month) + '月'
  }
}
/**
   * 获取当前展示的月份
   */
function chaifen(dateStr) {
  var strs = new Array();
  strs = dateStr.split('年');
  var month = strs[1];
  var months = new Array();
  months = month.split('月');
  var newYear = strs[0];
  var newMonth = months[0];
  var newDate = new Date(newYear, newMonth - 1);
  return newDate;
}

// 获取当前时间数组
function getNowTime(){
  var date = new Date()
  var hour = date.getHours()
  var times = []
  for(var i = 0; i <= hour; i++)
  {
    times[i] = formatNumber(i)
  }
  return times
  console.log('......' + times)

}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  changeMonth:changeMonth,
  chaifen: chaifen,
  getNowTime: getNowTime,
}