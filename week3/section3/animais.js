function initTab() {
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
initTab();

function initAccordion() {
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
initAccordion();


function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('a[href ^= "#"]');
    function scrollSmooth(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSmooth);
    })
}
initScrollSmooth();

function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowHalf = window.innerHeight * 0.6;
        function scrollAnimation() {
            sections.forEach((section) => {
                const sectionToTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionToTop - windowHalf) < 0; 
                if(isSectionVisible) {
                    section.classList.add('ativo');
                    
                }else {
                    section.classList.remove('ativo')
                }
            })
        }
        
        scrollAnimation();
        window.addEventListener('scroll', scrollAnimation)
    }
}
initScrollAnimation();


