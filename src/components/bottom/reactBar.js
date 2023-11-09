import { ref, computed } from 'vue'
import {play_list, durationSec, duration} from './buttonEvent'
import {change_time_format} from '../../utils/utils'

export const timeBar = ref(null)
export const volBarProgress = ref(null)
export const volBar = ref(null)
export const progressBar = ref(null)
export var timeMusic = ref("0:0")

export function timeBarEvent(event) {
    if (timeBar != null) {
        const timeBarRect = timeBar.value.getBoundingClientRect();
        const clickX = event.clientX - timeBarRect.left;
        const newTime = (clickX / timeBarRect.width) * durationSec;

        play_list.value.seek(newTime)
    }
}

export function changeVolume(event) {
    if (volBar != null) {
        const volBarRect = volBar.value.getBoundingClientRect();
        const clickX = event.clientX - volBarRect.left;
        const newVol = (clickX / volBarRect.width) 

        volBarProgress.value.style.width = (newVol * 100) + '%';
        play_list.value.volume(newVol)
    }
}

export function updateProgressBar() {
    if (progressBar != null) {
        var interval = 100;

        var updateInterval = setInterval(function() {
            var currentTime = play_list.value.seek() * 1000; // Chuyển đổi thời gian hiện tại thành mili giây
            var progress = (currentTime / duration) * 100;

            progressBar.value.style.width = progress + '%';
            timeMusic.value = change_time_format(play_list.value.seek());

            if (progress >= 100) {
                clearInterval(updateInterval);
            }
        }, interval);
    }
}