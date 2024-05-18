export default function initTab() {
    const tabContent = document.querySelectorAll('[data-tab="content"] article');
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    tabContent[0].classList.add('ativo');

    if(tabContent.length && tabMenu.length) {
        function addTabClass(index) {
            tabContent.forEach((article) => {
                
                article.classList.remove('ativo')
            })
            const direction = tabContent[index].dataset.anime
            tabContent[index].classList.add('ativo', direction)
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                addTabClass(index)
            })
        
        })
    }
}
