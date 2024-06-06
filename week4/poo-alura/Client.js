export class Cliente {
    nome;
    #cpf;

    get() {
        return this.#cpf
    }
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }
    
};