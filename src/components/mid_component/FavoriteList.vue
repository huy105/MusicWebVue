<template>
    <div>
        <div class="favor-list">
            <div class="info-list">
                <div id="left-info"></div>
                <div id="right-info">
                    <h1>Title</h1>
                    <p>Description</p>
                </div>
            </div>
            <div class="favor-contents">
                <div class="info-bar">
                    <p id="index">#</p>
                    <p id="title-bar">Title</p>
                    <p id="artist-bar">Artist</p>
                    <p id="duration">Duration</p>
                </div>
                <template v-for="(item, index) in favorList" :key="index">
                    <div class="item">
                        <p id="item-index">{{ index + 1 }}</p>
                        <img src="" alt="">
                        <div id="song-info">{{ item.name }}</div>
                        <div id="song-artist">{{ item.artist }}</div>
                        <p id="duration-value"></p>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    import {onMounted, watch} from 'vue';
    import {favorList} from './favorList.js'

    export default {
        setup() {
            
            onMounted(() => {

            });

            return {
                favorList
            };
        },
    };
</script>
<style src="../../assets/favor_list.css" ></style>
