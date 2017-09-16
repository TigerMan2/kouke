function Regular(str,reg){
  if(!reg.test(str)){
    wx.showModal({
      title: '请输入正确的手机号',
    })
    return false;
  }  
  return true;
}

// 手机号码是否正确
function IsPhoneNum(str){
  var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  return Regular(str,reg);
}

// 密码是否存在
function IsHavePsw(str){
  if (str.length == 0)
  {
    wx.showModal({
      title: '请输入密码',
    })
    return false;
  }
  return true;  
}

module.exports = {
  IsPhoneNum: IsPhoneNum,
  IsHavePsw: IsHavePsw,
}