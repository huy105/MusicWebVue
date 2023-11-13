export function change_time_format(time_value) {
/**
    * @param {number} time_value - time of audio in second
    * @returns {string} - string format
 */
    var minStr = Math.floor(time_value / 60)
    var secStr = Math.floor(time_value % 60)
    if (secStr < 10) {
        secStr = "0" + secStr
    }
    return minStr + ":" + secStr
}

export function change_music(audioIndex, play_list, data) {
/**
    * @param {number} audioIndex - index of audio in data
    * @param {Howl} play_list - howler object
    * @param {Array} data - data
**/
    play_list.unload()
    play_list._src = data[audioIndex.value]
    play_list.play()
}
