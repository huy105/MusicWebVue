import {ref, watch, computed} from 'vue'
import {HandleMenuToggle} from '../../utils/handleMenuClick'    

export var isUserMenuVisible = ref(false)
export var userMenu = ref(null)
export var buttonNav = ref(null)
const userMenuClick = ref({ x: 0, y: 0 })
const indexClick = ref(0)

const handleMenuToggle = new HandleMenuToggle(isUserMenuVisible, indexClick, userMenu, userMenuClick)

export function openUserMenu(event) {
    // isUserMenuVisible.value = !isUserMenuVisible.value
    handleMenuToggle.showMenu(event, indexClick)
}
