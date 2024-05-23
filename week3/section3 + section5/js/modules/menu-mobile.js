import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {
    const menuBtn = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.add('active');
        menuList.classList.add('active');
        outsideClick(menuList, ['click', 'touchstart'], () => {
            menuBtn.classList.remove('active');
            menuList.classList.remove('active');
        })
    })
}
