function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function()  {
    return `${this.nome} ${this.sobrenome}` 
}

const joao = new Pessoa("joao", "antonio", 20);
console.log(joao.nomeCompleto())