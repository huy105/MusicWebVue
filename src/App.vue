<template>
<div class="container">
  <div class="top">
    <router-view name="topBar"></router-view>
  </div>
  <div class="middle">
    <div class="left">
        <router-view name="leftContents"></router-view>
        <router-view name="popUp"></router-view>
    </div>
    <div class="right">
        <router-view name="rightContents"></router-view>
    </div>
  </div>
  <div class="bottom">
    <router-view name="bottomBar"></router-view>
  </div>
</div>
</template>

<script setup>
</script>

<style src="./assets/app.css" ></style>