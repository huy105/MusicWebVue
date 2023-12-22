<template>
    <div class="top_bar_nav">
        <div class="left_nav_bar">
            <router-link to="/">Home</router-link>
        </div>
        <div class="right_nav_bar">
            <div>
                <button ref="buttonNav" id="user-toggle" @click="openUserMenu($event)" >
                    <div v-if="isUserMenuVisible" ref="userMenu" id="user-menu">
                        <ul>
                            <div>
                                <img src="../../../user-profile.svg" alt="">
                                <li @click="openProfile">Profile</li>
                            </div>
                            <div>
                                <img src="../../../power-button.svg" alt="">
                                <li @click="logOut">Log out</li>
                            </div>
                        </ul>
                    </div>
                </button>
            </div>
        </div>

    </div>
</template>
<script>
    import {inject, onMounted, watch} from 'vue';
    import {isUserMenuVisible, userMenu, buttonNav, openUserMenu} from './navBarScript';    

    export default {
        setup() {
            
            onMounted(() => {

            });

            return {
                isUserMenuVisible, buttonNav, userMenu, openUserMenu
            };
        },
    };
</script>
<style src="../../assets/top_nav_bar.css" ></style>