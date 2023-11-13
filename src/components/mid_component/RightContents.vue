<template>
    <div class="container-right">
        <div v-for="topic in data" class="topic">
            <div class="title-topic">{{topic.topic_title}}</div>
            <div class="contents">
                <div v-for="content in topic.Songs" class="each-content">
                    <div><img src="" alt=""></div>
                    <p class="song-name">{{ content.title }}</p>
                    <p class="artist">{{ content.artist }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    import {data} from './handleContents';

    export default {
        setup() {
            
            onMounted(() => {
            });

            return {
                data
            }
        },
    };

</script>

<style src="./right_contents.css" ></style>