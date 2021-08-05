
const Sa = {};

Sa.console = () => {
  console.log('触发全局的console方法')
}

/**
 *    时间戳转换字符串
 *    timeStamp：时间戳
 *    type：转换字符串类型(string,中间无空格,可自行添加格式判断处理)
 *          'YY:MM:DD-HH:MM:SS'  == 'xx:xx:xx-xx:xx:xx'
 *          'YY年MM月DD日 HH时MM分SS秒'  == 'xx年xx月xx日 xx时xx分xx秒'
 *          'YY-MM-DD HH:MM:SS'  == 'xx-xx-xx xx:xx:xx'
 */
Sa.getDateTime = (timeStamp, type) => {
  let date = timeStamp ? new Date(timeStamp) : new Date();
  let timerStr = '',
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds();
      month = checkTime(month);
      day = checkTime(day);
      hour = checkTime(hour);
      minute = checkTime(minute);
      second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  switch (type) {
    case 'YY:MM:DD-HH:MM:SS':
      timerStr = "" + year + ":" + month + ":" + day + "-" + hour + ":" + minute + ":" + second;
      break;
    // case 'YY:MM:DD-HH:MM:SS':
    //   timerStr = "" + year + ":" + month + ":" + day + "-" + hour + ":" + minute + ":" + second;
    //   break;
    // case 'YY:MM:DD-HH:MM:SS':
    //   timerStr = "" + year + ":" + month + ":" + day + "-" + hour + ":" + minute + ":" + second;
    //   break;
    // case 'YY:MM:DD-HH:MM:SS':
    //   timerStr = "" + year + ":" + month + ":" + day + "-" + hour + ":" + minute + ":" + second;
    //   break;
    // case 'YY:MM:DD-HH:MM:SS':
    //   timerStr = "" + year + ":" + month + ":" + day + "-" + hour + ":" + minute + ":" + second;
    //   break;
    default:
      timerStr = "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒";
      break;
  }
  return timerStr
}

export default Sa;