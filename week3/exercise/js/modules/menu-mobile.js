import initClickOutside from './clickOutside.js'


export default function initMenuMobile() {
const menuBtn = document.querySelector('[data-nav="btn"]')
const menuLinks = document.querySelector('[data-nav="links"]')

menuBtn.addEventListener('click', (event) => {
        menuBtn.classList.toggle('active');
        menuLinks.classList.toggle('active');
    
    initClickOutside(menuLinks, ['click'], () => {
        menuBtn.classList.remove('active');
        menuLinks.classList.remove('active');
    })
})
    
}
