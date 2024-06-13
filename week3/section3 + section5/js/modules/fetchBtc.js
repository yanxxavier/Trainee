export default function initfetchBtc() {
    async function fetchBtc(url) {
        try {
           const btcResponse = await fetch(url);
            const btcJSON = await btcResponse.json();
            const btcTotal = document.querySelector('.btcTotal')
    
            btcTotal.innerText = ((1000/btcJSON.BRL.sell).toFixed(4)) 
        }
        catch(erro) {
            console.log(erro)
        }
        
    }
    
    fetchBtc('https://blockchain.info/ticker')
}

