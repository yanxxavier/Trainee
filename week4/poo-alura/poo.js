import {Cliente} from './Client.js'
import {contaCorrente} from './contaCorrent.js'

const cliente1 = new Cliente('Yan', 79865765765);


const contaCorrenteYan = new contaCorrente(cliente1, 1001);
contaCorrenteYan.depositar(500);



const cliente2 = new Cliente('Gabi', 12312325);

 
const contaCorrenteGabi = new contaCorrente(cliente2, 1002);

const cliente3 = new Cliente('ben', 145343235);
const contaCorrentBen = new contaCorrente(cliente3, 1003)






console.log(contaCorrente.numeroDeContas);

