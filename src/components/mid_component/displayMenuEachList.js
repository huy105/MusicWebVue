import {ref, watch, computed} from 'vue'

export var isMenuVisible = ref(false)
export var rightClickOutsideMenu = ref(false)
export var wholeList = ref(null)
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
    var LastId = farvoriteList.value.length
    farvoriteList.value.push({id: LastId, title: "New list"})
}

// show menu each list
export function showMenu(event, index) {

    isMenuVisible.value = true;
    menuPosition.value = { x: event.clientX, y: event.clientY };
    event.preventDefault();
    
    // hold the index when click right
    idList.value = index

    window.addEventListener('click', checkClickOutsideWindow);
    window.addEventListener('contextmenu', checkClickOutsideWindow);
}

// hide menu after event click
function hideContextMenu() {
    isMenuVisible.value = false;

    window.removeEventListener('contextmenu', checkClickOutsideWindow);
    window.removeEventListener('click', checkClickOutsideWindow);
}

function checkClickOutsideWindow(event) {
    var listElement = wholeList.value
    event.preventDefault();

    if (listElement && !listElement.contains(event.target)) {
        hideContextMenu()
    }
}

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

export function deledeList() {
    farvoriteList.value = farvoriteList.value.filter(
        (item) => item.id !== (idList.value)
    );
}
