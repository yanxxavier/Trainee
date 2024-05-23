export default function initSliderHome() {

    let count = 1;
    document.getElementById('radio1').checked = true;

    setInterval (() => {
        count ++;
        if(count>3) {
            count = 1;
        }
        document.getElementById('radio' + count).checked = true;
        
    }, 5000)
}

