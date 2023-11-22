<template>
    <div class="container-left">
        <div class="list-header">
            <div>
                <img src="" alt="">
            </div>
            <p>Thư viện</p>
            <div class="button-add-list">
                <button @click="addList">
                    <img src="../../../add-list.svg" alt="">
                </button>
            </div>
        </div>
        <div  class="list-farvorite-list">
            <div ref="eachList" v-for="list in farvoriteList" @contextmenu.prevent="showMenuLeft($event, list.id)" class="list">
                <div class="left-list">
                    <img src="" alt="">
                </div>
                <div class="right-list">
                    <p>{{ list.title }}</p>
                </div>
            </div>
            <div v-if="isMenuVisible" class="context-menu" :style="newMenuStyle">
                <ul>
                    <li @click="openPopup">Rename</li>
                    <li @click="deledeList">Delete</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {inject, onMounted, watch} from 'vue';
    import {farvoriteList, eachList, isMenuVisible, newMenuStyle,
        addList, openPopup, deledeList, showMenuLeft} from './displayMenuEachList';    

    export default {
        setup() {
            
            onMounted(() => {

            });

            return {
                eachList, isMenuVisible, newMenuStyle, farvoriteList, 
                addList, showMenuLeft, openPopup, deledeList
            };
        },
    };
</script>
<style src="../../assets/left_contents.css"></style>