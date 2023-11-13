<template>
    <div class="container-bottom">
        <div class= "left-bottom">
            <div>img</div>
            <div>title</div>
        </div>
        <div class= "mid-bottom">
            <div class="react_buttons">
                <div>
                    <button class="back-button" type="button">
                        <img src="../../../back-button.svg" alt="start-music" class="music-icon">
                    </button>
                    <button @click="playMusic" class="play-button" type="button">
                        <img ref="playButtonImg" src="../../../play-button.svg" alt="start-music" class="music-icon">
                    </button>
                    <button @click="nextMusic" class="next-button" type="button">
                        <img src="../../../next-button.svg" alt="start-music" class="music-icon">
                    </button>
                </div>
            </div>
            <div class="audio_progress_bar">
                <p class="time">{{ timeMusic }}</p>
                <div @click="timeBarEvent" ref="timeBar" class="time-bar">
                <div ref="progressBar" class="time-progress"></div>
                </div>
                <p>{{ duration_show }}</p>
            </div>
        </div>
        <div class= "right-bottom">
            <div class = "util-buttons">
                <button class="vol-button" type="button">
                    <img src="../../../vol-button.svg" alt="start-music" class="music-icon" id="myImage">
                </button>
                <div @click="changeVolume" ref="volBar" class="vol-bar">
                    <div ref="volBarProgress" class="vol-bar-progress"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {onMounted} from 'vue';
    import {audioIndex, playButtonImg, duration_show, playMusic, nextMusic} from './buttonEvent';
    import {timeBar, volBarProgress, volBar, progressBar, timeMusic,
        changeVolume, timeBarEvent, updateProgressBar
    } from './reactBar';
    export default {
        setup() {
            
            onMounted(() => {
                updateProgressBar()
            });

            return {
                audioIndex, playButtonImg, timeMusic, timeBar, volBarProgress, volBar,
                duration_show, progressBar,playMusic, nextMusic, updateProgressBar, timeBarEvent, changeVolume
            }
        },
    };

</script>
<style src="./audio_react_bar.css" ></style>
