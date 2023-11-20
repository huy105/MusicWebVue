<template>
    <div ref="containerRight">
        <div ref="eachSongMenu" v-if="isSongMenuVisible" :style="newRightMenuStyle" class="each-song-menu">
            <ul>
                <li @mouseover="showListFavor">Add to list</li>
            </ul>
        </div>
        <div v-if="isFavorListVisible" :style="newFavorListStyle" class="each-song-menu">
            <ul>
                <li>somecontent</li>
                <li>somecontent1</li>
                <li>somecontent2</li>
            </ul>
        </div>

        <div v-for="topic in recommendData" class="topic">
            <div class="title-topic">{{topic.topic_title}}</div>
            <div  class="contents">
                <div>
                    <template v-for="(content, index) in topic.Songs" :key="index" >
                    <div v-if="index < maxItemsToShow" ref="eachContent" class="each-content" @contextmenu.prevent="showMenuRight($event, content.title)">
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

    </div>
</template>

<script>
    import {onMounted} from 'vue';
    import {maxItemsToShow, containerRight, eachContent, 
        isSongMenuVisible, newRightMenuStyle, 
        isFavorListVisible, eachSongMenu, newFavorListStyle,
        showMenuRight, controlContent, showListFavor
    } from './handleDisplayRight';
    import {recommendData, playThisMusic} from './interactData';   

    export default {
        setup() {

            onMounted(() => {
                controlContent()
            });

            return {
                recommendData, containerRight, maxItemsToShow, eachContent, 
                isSongMenuVisible, newRightMenuStyle, 
                isFavorListVisible, eachSongMenu, newFavorListStyle,
                showMenuRight, controlContent, playThisMusic, showListFavor
            };
        },
    };

</script>

<style src="../../assets/right_contents.css" ></style>