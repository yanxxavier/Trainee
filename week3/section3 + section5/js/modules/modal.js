export default function initModal() {
    const openModal = document.querySelector('[data-modal="open"]')
    const closeModal = document.querySelector('[data-modal="close"]')
    const containerModal = document.querySelector('[data-modal="container"]')

    if(openModal && closeModal && containerModal) {
        openModal.addEventListener('click', (event) => {
            event.preventDefault();
            containerModal.classList.add('ativo')
        })

        closeModal.addEventListener('click', () => {
            containerModal.classList.remove('ativo')
        })
        
        containerModal.addEventListener('click', (event) => {
            if(event.target === containerModal) {
                containerModal.classList.remove('ativo')
            }
        })
    }
    
}

