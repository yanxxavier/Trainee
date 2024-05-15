export default function initTab() {
    const tabContent = document.querySelectorAll('.js-tab__content article');
    const tabMenu = document.querySelectorAll('.js-tab__menu li');
    tabContent[0].classList.add('ativo');

    if(tabContent.length && tabMenu.length) {
        function addTabClass(index) {
            tabContent.forEach((article) => {
                article.classList.remove('ativo')
            })
        
            tabContent[index].classList.add('ativo')
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                addTabClass(index)
            })
        
        })
    }
}
