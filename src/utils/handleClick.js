function ClickEventHandle(isShowVar, indexData, checkingElement) {
    this.isShowVar = isShowVar;
    this.indexData = indexData;
    this.checkingElement = checkingElement;

    this.showMenu = function(event) {
        isShowVar.value = true;
        
    }
};