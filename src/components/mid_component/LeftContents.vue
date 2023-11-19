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
        <div ref="wholeList" class="list-farvorite-list">
            <div v-for="list in farvoriteList" @contextmenu.prevent="showMenu($event, list.id)" class="list">
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
    import {farvoriteList, wholeList, isMenuVisible, newMenuStyle,
        addList, showMenu, openPopup, deledeList} from './displayMenuEachList';    

    export default {
        setup() {
            
            onMounted(() => {

            });

            return {
                wholeList, isMenuVisible, newMenuStyle, farvoriteList, 
                addList, showMenu, openPopup, deledeList
            };
        },
    };
</script>
<style src="../../assets/left_contents.css"></style>