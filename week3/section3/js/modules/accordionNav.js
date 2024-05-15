export default function initAccordion() {
    const accordingList = document.querySelectorAll('.js-accordion__list dt')
    if(accordingList.length) {
        accordingList[0].classList.add('ativo');
        accordingList[0].nextElementSibling.classList.add('ativo')
        
        function addAccordingClass() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        
            
        }
        
        accordingList.forEach((item)=> {
            item.addEventListener('click', addAccordingClass);
        })
    }
    
}
