import {ref, watch, computed} from 'vue'
import {HandleClick} from '../../utils/handleMenuClick'    

export var isMenuVisible = ref(false)
export var rightClickOutsideMenu = ref(false)
export var eachList = ref(null)
export var idList = ref(null)
export var menuPosition= ref({ x: 0, y: 0 })
export var isPopupVisible = ref(false)
export var newNameList = ref(null)

export var farvoriteList = ref([
    {id: 1, title: 'farvorite'},
    {id: 2, title: 'sleep'},
    {id: 3, title: 'fun'},
])

export function addList() {
    // handle logic after create database (if done, wipe out)

    var LastId = farvoriteList.value.length + 1
    farvoriteList.value.push({id: LastId, title: "New list"})
}

export function deledeList() {
    // handle logic after create database (if done, wipe out)

    farvoriteList.value = farvoriteList.value.filter(
        (item) => item.id !== (idList.value)
    );
    
}

// handle show menu each list by object
const handleClickLeft = new HandleClick(isMenuVisible, idList, eachList, menuPosition);
export function showMenuLeft(event, id) {
    handleClickLeft.showMenu(event, id)
};

// changing position after click
export var newMenuStyle = computed(() => {
    return {
        position: 'fixed',
        top: `${menuPosition.value.y}px`,
        left: `${menuPosition.value.x}px`,
    }
})

export function submitRenameList() {
    var list = farvoriteList.value.find((item) => item.id === idList.value)
    list.title = newNameList.value
    newNameList.value = null
    closePopup()
}

export function openPopup() {
    isPopupVisible.value = true;
}

export function closePopup() {
    isPopupVisible.value = false;
    newNameList.value = null
}

