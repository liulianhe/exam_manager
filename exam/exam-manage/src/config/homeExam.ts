
//时间戳转时间 

let fix = function (num: number, length: number) { // 两位补0
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num
}
export function dateFormat(data: any) {
    let date = new Date(data*1)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const second = date.getSeconds()
    const updateDate = year + '-' + fix(month, 2) + '-' + fix(day, 2) + ' ' + fix(hour, 2) + ':' + fix(minutes, 2) + ':' + fix(second, 2)
    return updateDate
}


//计算还有多长时间
export function textDate(start: string, end: string) {
    let time = Number(end) - Number(start)
    var total = time / 1000;
    var day = Math.floor(total / (24 * 60 * 60));//计算整数天数
    var afterDay = total - day * 24 * 60 * 60;//取得bai算出du天数后剩余的秒zhi数
    var hour = Math.floor(afterDay / (60 * 60));//计算整数小时dao数
    var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
    var min = Math.floor(afterHour / 60);//计算整数分
    var afterMin = Math.floor(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);//取得算出分后剩余的秒数
    let res = [hour,min,afterMin].join(':')
    return res
  }