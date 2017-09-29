
//微信小程序请求的二次封装
// var API_URL = 'http://report.mypays.cn/' 
var API_URL = 'http://192.168.1.37:8088/'


//GET
function GET(url, params, success, fail) {
  request('GET', url, params, success, fail)
}
//POST
function POST(url, params, success, fail) {
  request('POST', url, params, success, fail)
}
//DELETE
function DELETE(url, params, success, fail) {
  request('DELETE', url, params, success, fail)
}

//请求
function request(method, url, params, success, fail) {
  var params = params;
  //微信加载框
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  //请求
  wx.request({
    url: API_URL + url,
    data: params,
    method: method,//OPTIONS,GET,POST,HEAD,PUT,DELETE,TRACE,CONNECT
    //设置请求头的数据
    header: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'json'
    },//设置请求头的header,请求头需要的参数添加
    //请求成功的返回
    success: function (res) {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        //成功返回需要的数据
        success(res.data)
      } else {
        if (fail) {
          fail(res)
        } else {
          //请求失败，控制台打印失败数据
        }
      }
    },
    //请求失败的返回
    fail: function (errorRes) {
      console.log(errorRes)
      if (fail) {
        fail(errorRes)
      } else {
        //打印错误信息
        console.log(errorRes)
      }
    },
    complete: function () {
      wx.hideLoading();//完成，取消提示框
      wx.stopPullDownRefresh();//结束下拉刷新
    }
  })
}

//模拟线程加载
function DELAY(complete) {
  wx.showLoading({
    title: '加载中',
  });//展示loading
  setTimeout(function () {
    wx.hideLoading();//隐藏loading
    complete();
  }, 1000);
}

//定义接口
module.exports = {
  GET: GET,
  POST: POST,
  DELETE: DELETE,
  DELAY: DELAY
}
