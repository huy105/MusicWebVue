<template>
    <div class="profile-page">
        <div class="profile-nav">

        </div>
        <div class="profile-content">
            <div class="left-profile">
                <div>
                    <img src="../../../profile-picture.jfif" alt="">
                </div>
            </div>
            <div class="right-profile">
                <div>
                    <Multiselect
                        v-model="value"
                        mode="tags"
                        placeholder="Select your characters"
                        :options="options"
                        :searchable="true"
                        class="multiselect-custom"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import Multiselect from '@vueform/multiselect'
    import {options, value} from './profileDisplay'  

    export default {
        components: { Multiselect },
        setup() {
            return {
                options, value
            };
        }
    };
</script>
  
  <style src="@vueform/multiselect/themes/default.css"></style>
  <style src="./extend.css"></style>