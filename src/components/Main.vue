<template>
<div class="container">
    <div class="top">
        <nav-bar></nav-bar>
    </div>
    <div class="middle">
        <div class="left">
            <left-contents></left-contents>
            <popup></popup>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
    <div class="bottom">
        <audio-react-bar></audio-react-bar>
    </div>
</div>
</template>

<script setup>
import LeftContents from './mid_component/LeftContents.vue'
import NavBar from './top_com/NavBar.vue'
import AudioReactBar from './bottom/AudioReactBar.vue'
import Popup from './mid_component/Popup.vue'
</script>
<style src="../assets/app.css" ></style>
