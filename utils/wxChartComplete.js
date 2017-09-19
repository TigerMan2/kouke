var Charts = require('../dist/wxcharts.js');

function wxCharts(simulationData, name, canvasId){
  let windowWidth = 320;
  try {
    let res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    // do something when get system info failed
  }
  var lineChart = new Charts({
    canvasId: canvasId,
    type: 'line',
    categories: simulationData.categories,
    series: [{
      name: '成功交易',
      data: simulationData.data,
      format: function (val) {
        return val.toFixed(2) + '万';
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
    dataLabel: true,
    dataPointShape: true,
    enableScroll: true,
    extra: {
      lineStyle: 'curve'
    }
  });
  return lineChart;
}

module.exports = {
  wxCharts: wxCharts
}