export function change_time_format(time_value) {
    var minStr = Math.floor(time_value / 60)
    var secStr = Math.floor(time_value % 60)
    if (secStr < 10) {
        secStr = "0" + secStr
    }
    return minStr + ":" + secStr
}
