<template>
<div class="container">
  <div class="top">10%</div>
  <div class="middle">
    <div class="left">30%
      <div>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
    </div>
    <div class="right">
        <right-contents></right-contents>
    </div>
  </div>
  <div class="bottom">
    <audio-react-bar></audio-react-bar>
  </div>
</div>
</template>

<script setup>
import AudioReactBar from './components/bottom/AudioReactBar.vue'
import RightContents from './components/mid_component/RightContents.vue'
</script>

<style>

    #app {
        width: 100%;
        padding: 0 0;
        margin: 0 0;
        max-width: 100%;
        display: inline;
    }

    .main {
        overflow-y: hidden;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100vh; /* Đảm bảo độ cao của container bằng chiều cao của màn hình (viewport) */
        background-color: #000;
    }

    .top, .middle, .bottom {
      border: 2px solid #000;
      margin: 5px;
      border-radius: 15px;
      background-color: #272424;
    }

    .top {
      height: 8%;
    }

    .middle {
        display: flex;
        flex-direction: row;
        height: 75%;
        background-color: #000;
        padding: 0;
    }

    .bottom {
        display: flex;
        flex-direction: row;
        height: 15vh;
        background-color: #000;
        margin-bottom: 20px;
    }

    .left {
        flex: 2.5; /* 30% */
        overflow-y: scroll;
        background-color: #272424;
        border-radius: inherit;
    }

    .left > div {
        height: auto;
    }

    ::-webkit-scrollbar {
        background-color: #272424;
        border-radius: 10px;
        width: 12px;
    }    
    
    ::-webkit-scrollbar-thumb:hover {
        background: #b3aaaa;
        border-radius: 10px;
    }

    .right {
        flex: 7.5; /* 70% */
        height: 100%;
        width: 100%;
        overflow-y: auto;
        margin-left: 10px;
        background-color: #272424;
        border-radius: inherit;
    }

    .right > div {
        display: block;
        box-sizing: border-box;
        height: 100%;
        width: auto;
        margin: 10px 10px 10px 10px;
    }
</style>