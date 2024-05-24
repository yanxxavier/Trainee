export default function initAnimaNumeros() {

}
const numeros = document.querySelectorAll('[data-numero]')
numeros.forEach((numero) => {
    const total = +numero.innerText;
    const dividendo = Math.floor(total / 100)
    let count = 0;

    const timer = setInterval(() => {
        count = count + dividendo;
        numero.innerText = count
        if(count > total) {
            numero.innerText = total
            clearInterval(timer);
        }
    }, 50);


})