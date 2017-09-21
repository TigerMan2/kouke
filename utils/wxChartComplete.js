var Charts = require('../dist/wxcharts.js');

// 折线图
function wxCharts(simulationData, name, canvasId, chartStyle, isScroll){
  let windowWidth = 320;
  try {
    let res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    // do something when get system info failed
  }
  var lineChart = new Charts({
    canvasId: canvasId,
    type: chartStyle,
    categories: simulationData.categories,
    series: [{
      name: name,
      data: simulationData.data,
      format: function (val, name) {
        return val.toFixed(2);
      }
    }],
    yAxis: {
      title: '交易量(万)',
      format: function (val) {
        return val.toFixed(2);
      },
      min: 0
    },
    width: windowWidth,
    height: 300,
    dataLabel: isScroll,
    dataPointShape: true,
    enableScroll: isScroll,
  });
  return lineChart;
}

// 柱状图
function columnCharts(simulationData, name, canvasId, chartStyle) {
  let windowWidth = 320;
  try {
    let res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    // do something when get system info failed
  }
  var lineChart = new Charts({
    canvasId: canvasId,
    type: chartStyle,
    categories: simulationData.categories,
    series: [{
      name: name,
      data: simulationData.data,
      format: function (val) {
        return val + '%';
      }
    }],
    yAxis: {
      title: '单位：%',
      format: function (val) {
        return val;
      },
      min: 0
    },
    width: windowWidth,
    height: 300,
    dataLabel: true,
    dataPointShape: true,
    enableScroll: true,
    extra: {
      lineStyle: 'curve'
    }
  });
  return lineChart;
}

// 环形
function wxconsume(simulationData, canvasId) {
  let windowWidth = 320;
  try {
    let res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    // do something when get system info failed
  }
  new Charts({
    canvasId: canvasId,
    type: 'ring',
    series: simulationData,
    width: windowWidth,
    height: 300,
  });
}

module.exports = {
  wxCharts: wxCharts,
  wxconsume: wxconsume,
  columnCharts: columnCharts,
}