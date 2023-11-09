import {Howl, Howler} from 'howler';
import {ref, computed} from 'vue'
import {change_time_format} from '../../utils/utils'

const data = ['./a123.mp3','./Aimer-1.mp3', './Aimer-2.mp3', './Aimer-SKYLIGHT.mp3']
export const playButtonImg = ref(null)
export var duration_show = ref("0:00")
export var durationSec = 0
export var duration = 0

export function playMusic() {
    if (playButtonImg != null) {
        if (play_list.value.playing()) {
            play_list.value.pause()
            playButtonImg.value.src = './play-button.svg'
        } else {
            play_list.value.play()
            playButtonImg.value.src = './pause-button.svg'
        }
    };
}

export var play_list = ref(new Howl ({
    src: [data[1]],
    html5: true,
    preload: 'auto',
}));

play_list.value.on('load', function() {
    durationSec = play_list.value.duration()
    duration_show.value = change_time_format(durationSec)
    duration = play_list.value.duration() * 1000;
});

