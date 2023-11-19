<template>
    <div ref="containerRight">
        <div v-for="topic in recommendData" class="topic">
            <div class="title-topic">{{topic.topic_title}}</div>
            <div  class="contents">
                <template v-for="(content, index) in topic.Songs" :key="index">
                <div v-if="index < maxItemsToShow" ref="eachContent" class="each-content">
                    <div><img src="" alt=""></div>
                    <p class="song-name">{{ content.title }}</p>
                    <p class="artist">{{ content.artist }}</p>
                    <button @click="playThisMusic(content.title)" class="hidden-button">
                        <img  src="../../../play-button.svg" alt="">
                    </button>
                </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {inject, onMounted} from 'vue';
    import {maxItemsToShow, containerRight, 
        eachContent, controlContent} from './handleDisplayRight';
    import {recommendData, playThisMusic} from './interactData';    

    export default {
        setup() {
            
            onMounted(() => {
                controlContent()
            });

            return {
                recommendData, containerRight, maxItemsToShow, 
                eachContent, controlContent, playThisMusic
            };
        },
    };

</script>

<style src="../../assets/right_contents.css" ></style>