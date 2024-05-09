var eu = {
    nome: 'yan',
    sobrenome: 'xavier',
    nomeCompleto() {return this.nome + this.sobrenome},
    idade: 20,
    sexo: 'masculino',
    relacionamento: true,  
}
console.log(eu.nomeCompleto())
console.log(eu.nome.charAt(0))



var carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi',
}
carro.preco = 3000;
console.log(carro.preco);

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir (pessoa) {return pessoa == 'homem' ? true : false },
    
}



var anosCopa = [1959, 1962, 1970, 1994, 2002];

for (let i = 0; i < anosCopa.length; i++) {
    console.log(`O brasil ganhou a copa de: ${anosCopa[i]}`)
}

var frutas = ['banana', 'maça','pera','uva', 'melancia' ];

for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta])
    if (frutas[fruta] === 'pera') {
        break
    }
}





