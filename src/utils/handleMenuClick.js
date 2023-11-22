export class HandleClick {
    /**
        This class handle event click to show action of each contents (like click each song and add them to farvorite list)
            * @param {boolean} isShowVar - vue ref variable to indicate menu is showing or not
            * @param {string, number} indexData - vue ref variable to get the unique index of each contents when click
            * @param {Array<Dom>} checkingElement - vue ref variable (array of DOM) to check if click is inside content
            * @param {object} clickPosition - vue ref variable to get value of position at each click
    **/
    constructor(isShowVar, indexData, checkingElement, clickPosition) {
        this.isShowVar = isShowVar
        this.indexData = indexData
        this.checkingElement = checkingElement
        this.clickPosition = clickPosition


        this.showMenu = this.showMenu.bind(this);
        this.checkClickOutsideWindow = this.checkClickOutsideWindow.bind(this);
        this.hideContextMenu = this.hideContextMenu.bind(this);
    }

    showMenu(event, index) {
    
        this.isShowVar.value = true;
        this.clickPosition.value = { x: event.clientX, y: event.clientY };
        event.preventDefault();

        // hold the index when click right
        this.indexData.value = index
        
        // use setTimeout to wait for next event click
        setTimeout(() => {
            window.addEventListener('click', this.checkClickOutsideWindow);
            window.addEventListener('contextmenu', this.checkClickOutsideWindow);
        }, 0);
    };

    checkClickOutsideWindow(event) {
        /**
            check all element if event click is inside any element (it's mean click to content)
            then checkInside = true else checkInside = false
            Constaint: this.checkingElement.value must be array
        **/
        
        if (!Array.isArray(this.checkingElement.value)) {
            this.checkingElement.value = [this.checkingElement.value];
        };
              
        var checkElements = this.checkingElement.value;
        event.preventDefault();
        
        for (const ele of checkElements) {
            var checkInside = false;

            if (ele.contains(event.target)) {
                checkInside = true;
                break;
            };
        };

        if (checkInside == false) {
            this.hideContextMenu();
        };
    }; 

    hideContextMenu() {
        this.isShowVar.value = false;
    
        window.removeEventListener('contextmenu', this.checkClickOutsideWindow);
        window.removeEventListener('click', this.checkClickOutsideWindow);
    };

};

export class HandleClickManyDom extends HandleClick {
    /**
        This class handle event when we have menu in menu
        @param {boolean} nextShowVar - vue ref variable to indicate next menu of some menu is showing or not
    **/
    
    constructor( nextShowVar, ...rest) {
        super(...rest);
        this.nextShowVar = nextShowVar;
    };

    showMenu(event, index) {
        this.isShowVar.value = true;
        // if we click content again we need to hide next menu
        this.nextShowVar.value = false;

        this.clickPosition.value = { x: event.clientX, y: event.clientY };
        event.preventDefault();

        // hold the index when click right
        this.indexData.value = index
        
        // use setTimeout to wait for next event click
        setTimeout(() => {
            window.addEventListener('click', this.checkClickOutsideWindow);
            window.addEventListener('contextmenu', this.checkClickOutsideWindow);
        }, 0);
    };
    
    hideContextMenu() {
        this.isShowVar.value = false;
        this.nextShowVar.value = false;
    
        window.removeEventListener('contextmenu', this.checkClickOutsideWindow);
        window.removeEventListener('click', this.checkClickOutsideWindow);
    };
};