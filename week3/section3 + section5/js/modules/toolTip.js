export default function initToolTip() {
    const toolTips = document.querySelectorAll('[data-tooltip]');


    toolTips.forEach((toolTip) => {
        toolTip.addEventListener('mouseover', onMouseOver);
    });
    
    function onMouseOver(event) {
        const toolTipBox = toolTipCreatBox(this)
        
        onMouseLeave.toolTipBox = toolTipBox;
        onMouseLeave.element = this; 
        this.addEventListener('mouseleave', onMouseLeave);
    
        onMouseMove.toolTipBox = toolTipBox;
        this.addEventListener('mousemove', onMouseMove);
    
    }
    
    const onMouseLeave = {
        toolTipBox: '',
        element: '',
        handleEvent() {
            this.toolTipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }
    const onMouseMove = {
        handleEvent(event) {
            this.toolTipBox.style.top = event.pageY + 20 + "px";
            this.toolTipBox.style.left = event.pageX + 20 + "px";
        }
    }
    
    function toolTipCreatBox (element) {
        const toolTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label')
        toolTipBox.classList.add('tooltip')
        toolTipBox.innerText = text;
        document.body.appendChild(toolTipBox)
        return toolTipBox
    }
        
}

