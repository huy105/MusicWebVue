<!-- Popup.vue -->
<template>
    <div v-if="isPopupVisible" class="popup-overlay">
      <div class="popup">
        <span class="close-button" @click="closePopup">
            <img src="../../../close-popup.svg" alt="">
        </span>
        <h2>New Name</h2>
        <form @submit.prevent="submitRenameList">
          <input type="text" v-model="newNameList" required>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
</template>
  
<script>
    import {onMounted, watch} from 'vue';
    import {newNameList, isPopupVisible, closePopup, submitRenameList} from './displayMenuEachList'

    export default {
        setup() {
                    
        onMounted(() => {

        });

        return {newNameList, isPopupVisible, 
            closePopup, submitRenameList};
    }    
  };
</script>
  
<style src="../../assets/popup.css"></style>