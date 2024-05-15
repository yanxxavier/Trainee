

export default function initScrollAnimation() {
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