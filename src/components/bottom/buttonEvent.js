import {Howl, Howler} from 'howler';
import {ref, computed, inject} from 'vue'
import {change_time_format, change_music} from '../../utils/utils'
import axios from 'axios'

export var audioDataList = ['./a123.mp3','./Aimer-1.mp3', './Aimer-2.mp3', './Aimer-SKYLIGHT.mp3']

export const playButtonImg = ref(null)
export var audioIndex = ref(0)
export var duration_show = ref("0:00")
export var durationSec = 0
export var duration = 0

export function playMusic() {
    if (playButtonImg != null) {
        if (play_list.playing()) {
            play_list.pause()
            playButtonImg.value.src = './play-button.svg'
        } else {
            play_list.play()
            playButtonImg.value.src = './pause-button.svg'
        }
    };
}

export function nextMusic() {
    audioIndex.value += 1
    change_music(audioIndex, play_list, audioDataList)
}

export function backMusic() {
    audioIndex.value -= 1
    change_music(audioIndex, play_list, audioDataList)
}

export var play_list = new Howl ({
    src: [audioDataList[audioIndex.value]],
    html5: true,
    preload: 'auto',
});

play_list.on('load', function() {
    durationSec = play_list.duration()
    duration_show.value = change_time_format(durationSec)
    duration = play_list.duration() * 1000;
});
