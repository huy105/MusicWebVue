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
        <!-- <right-contents></right-contents> -->
        <router-view></router-view>
    </div>
  </div>
  <div class="bottom">
    <audio-react-bar></audio-react-bar>
  </div>
</div>
</template>

<script setup>
import AudioReactBar from './components/bottom/AudioReactBar.vue'
import LeftContents from './components/mid_component/LeftContents.vue'
import NavBar from './components/top_com/NavBar.vue'
import Popup from './components/mid_component/Popup.vue'
</script>

<style src="./assets/app.css" ></style>