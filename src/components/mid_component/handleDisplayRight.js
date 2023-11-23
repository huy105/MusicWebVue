import {ref, watch, computed} from 'vue'
import {HandleClickManyDom} from '../../utils/handleMenuClick'    

export const containerRight = ref(null)
export const eachContent = ref(null)
export var maxItemsToShow = ref(2)

// control how much content to show
export function controlContent() {

    if (containerRight != null) {
        var interval = 200;

        var updateInterval = setInterval(function() {
            var lenConRight = containerRight.value.offsetWidth - 27
            var contentWidth = eachContent.value[0].offsetWidth + 
                parseInt(getComputedStyle(eachContent.value[0]).marginRight);
            
            maxItemsToShow.value = Math.floor(lenConRight / contentWidth)

        }, interval);
    }
};

// each song menu
export const isSongMenuVisible = ref(false)
export const songPosClick = ref({ x: 0, y: 0 })

export var newRightMenuStyle = computed(() => {
    return {
        position: 'fixed',
        top: `${songPosClick.value.y}px`,
        left: `${songPosClick.value.x}px`,
    }
})

// next menu after hover
export const isFavorListVisible = ref(false)
export const idFavorList = ref(false)
export const eachSongMenu = ref(null)

export function showListFavor() {
    isFavorListVisible.value = true
};

const handleHoverAddToList = new HandleClickManyDom(isFavorListVisible, isSongMenuVisible, idFavorList, eachContent, songPosClick);
export function showMenuRight(event, id) {
    handleHoverAddToList.showMenu(event, id)
};

export var newFavorListStyle = computed(() => {
    
    var withEachSongMenu = eachSongMenu.value.getBoundingClientRect().width
    
    return {
        position: 'fixed',
        top: `${songPosClick.value.y}px`,
        left: `${songPosClick.value.x + withEachSongMenu + 2}px`,
    }
})

