
const Sa = {};

/**
 *    时间戳转换字符串
 *    timeStamp：时间戳(不传入时间戳则获取当前时间)
 *    type：转换字符串类型(string,中间无空格,可自行添加格式判断处理)
 *          'YY年MM月DD日 hh时mm分ss秒'  == 'xx年xx月xx日 xx时xx分xx秒'
 *          'YY-MM-DD hh:mm:ss'  == 'xx-xx-xx xx:xx:xx'
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
    case 'YY年MM月DD日 hh时mm分ss秒':
      timerStr = year + "年" + month + "月" + day + "日 " + hour + "时" + minute + "分" + second + "秒";
      break;
    case 'YY-MM-DD hh:mm:ss':
      timerStr = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
      break;
    default:
      timerStr = year + "年" + month + "月" + day + "日 " + hour + "时" + minute + "分" + second + "秒";
      break;
  }
  return timerStr
}

export default Sa;