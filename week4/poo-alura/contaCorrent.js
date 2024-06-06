import { Cliente } from "./Client.js";

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    #cliente;

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        contaCorrente.numeroDeContas += 1;
    }


    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {
            this.#cliente = novoCliente;
        }
    }
    get cliente() {
        return this.#cliente
    }


    #saldo = 0;
    get saldo() {
        return this.#saldo
    }


    sacar(valor) {
        if(this.#saldo >= valor) {
            this.#saldo -= valor
            return valor
        }
    };
    depositar(valor) {
        if(valor <= 0) return

        this.#saldo += valor
    };
    transferir(valor, conta) {
       const valorSacado = this.sacar(valor);
       conta.depositar(valorSacado)
    }
}