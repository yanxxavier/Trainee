export default function initAccordionAnimation() {

}
const accordionList = document.querySelectorAll('[data-animation="accordion"] dt');
const questionList = document.querySelectorAll('.question');
accordionList[0].classList.add('activeAnimation');
accordionList[0].nextElementSibling.classList.add('activeAnimation')
questionList[0].classList.add('active');

accordionList.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        accordionList[index].classList.toggle('activeAnimation');
        accordionList[index].nextElementSibling.classList.toggle('activeAnimation');
        questionList[index].classList.toggle('active')
        
    } )
})