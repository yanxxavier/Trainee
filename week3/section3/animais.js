const linksInternos = document.querySelectorAll('a[href^= "#"]')
function addClass (event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
  
    })
    event.currentTarget.classList.add('ativo')
} 
linksInternos.forEach((link) => {
    
    link.addEventListener('click', addClass);
    
})


function removeTarget(event) {
    event.target.remove()
}
const allElements = document.querySelectorAll('body *');
console.log(allElements);
allElements.forEach((element) => {


    element.addEventListener('click', removeTarget)
})

const siteText = document.querySelectorAll('p')

function pressKey (event) {
    if (event.key === 't') {
        console.log('t foi apertado')
    }
    
    
}

window.addEventListener('keydown', pressKey)


const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');


copy.appendChild(cloneMenu)


const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
const primeiroDd = primeiroDt.nextElementSibling;
console.log(primeiroDd.textContent)


const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML

