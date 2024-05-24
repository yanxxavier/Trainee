export default function initTime() {

}

const now = new Date();
const past = new Date('November 24 2023 13:00');



function transformDate (time) {
    return time / (24 * 60 * 60 * 100)
}

const agora = transformDate(now);
const daysPaste = transformDate(past);

const leastDays = agora - daysPaste;
console.log(leastDays)