import {ref, watch, computed} from 'vue'

export const containerRight = ref(null)
export const eachContent = ref(null)
export var maxItemsToShow = ref(2)


// control how much content to show
export function controlContent() {
    if (containerRight != null) {
        var interval = 100;

        var updateInterval = setInterval(function() {
            var lenConRight = containerRight.value.offsetWidth - 27
            var contentWidth = eachContent.value[0].offsetWidth + 
                parseInt(getComputedStyle(eachContent.value[0]).marginRight);
            
            maxItemsToShow.value = Math.floor(lenConRight / contentWidth)

        }, interval);
    }
};


