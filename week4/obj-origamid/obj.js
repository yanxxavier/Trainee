let randomNumber;
let botChoice;
let result;

function transformRandomNumber(number) {
  if (number <= 9 && number >= 7) {
    botChoice = 'pedra'
 
  }else if(number <= 6 && number >= 4) {
    botChoice = 'papel'
  
  }else {
    botChoice = 'tesoura'
    
  }
  function duelo(player, bot) {
    
  }

}

function duelo(player, bot) {
  if (player == 'pedra') {
    if(bot == 'papel') {
      result = 'Derrota :(';
    }else if (bot == 'tesoura') {
      result = 'Vitória :)'
    }else {
      result = 'Empate'
    }
  }else if (player == 'papel') {
    if(bot == 'tesoura') {
      result = 'Derrota :('
    }else if (bot =='pedra') {
      result = 'Vitória :)'
    }else {
      result = 'Empate'
    }
  }else {
    if(bot == 'pedra') {
      result = 'Derrota :('
    }else if (bot == 'papel') {
      result = 'Vitória :)'
    }else {
      result = 'Empate'
    }
  }
}
const playerChoiceBox = document.getElementById('playerChoice')
const botChoiceBox = document.getElementById('botChoice')
const resultBox = document.getElementById('result')
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    playerChoiceBox.innerText = button.name;
    randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    transformRandomNumber(randomNumber)
    botChoiceBox.innerText = botChoice;
    duelo(button.name, botChoice);
    resultBox.innerText = result;


  })
})















// Retorne um número aleatório
// entre 1050 e 2000
 console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 27, 9';

console.log(Math.max(...numeros.split(',')))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[1]);

/*------------------------------------------------------------------------------------*/


const comidas = ['pizza', 'frango', 'carne', 'macarrão'];

const ultimo = comidas.pop()
console.log(ultimo)
const primeiro = comidas.shift();
console.log(primeiro)

comidas.push('arroz')
console.log(comidas)

comidas.unshift('peixe', 'batata');
console.log(comidas)



const estudantes = ['marcio', 'brenda', 'joana', 'kleber', 'julia'];

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('joana'));
console.log(estudantes.includes('juliana'));

let html = `<section>
              <div>sobre</div>
              <div>produtos</div>
              <div>contratos</div>
            </section>`
const ul = html.split('section').join('ul');
console.log(ul.split('div').join('li'));


const carros = ['ford', 'fiat', 'vw', 'honda'];

const newCarros = carros.slice();
carros.pop();
console.log(carros)

/*------------------------------------------------------------------------------------*/



const numbers = [3, 44, 333, 23, 122, 322, 33];
const higher100 = numbers.filter((number) => {
  return number > 100
})
console.log(higher100)


const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
'Teclado']

const hasBaixo = instrumentos.some((item) => {
  return item == 'Baixo'
})
console.log(hasBaixo)


// Retorne o valor total das compras
const compras = [
{
item: 'Banana',
preco: 'R$ 4,99'},
{
item: 'Ovo',
preco: 'R$ 2,99'
},
{
item: 'Carne',
preco: 'R$ 25,49'
},
{
item: 'Refrigerante',
preco: 'R$ 5,35'
},
{
item: 'Quejo',
preco: 'R$ 10,60'
}
]

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.')
  return acumulador + precoLimpo
}, 0)
console.log(valorTotal)

/*-----------------------------------------------------------------------------------*/

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInventors = inventors.filter((item) => {
  return item.year >= 1500 && item.year < 1600
   
})
console.table(bornInventors)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const nameInventors = inventors.map((item) => {
  return `${item.first} ${item.last}`
})
console.table(nameInventors)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdate = inventors.sort((first, second) => first.year > second.year ? 1 : -1); 
console.table(birthdate)
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLived = inventors.reduce((acumulador, item) => {
  return acumulador + (item.passed - item.year)
}, 0)
console.log(yearsLived)

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const last = a.passed - a.year;
  const next = b.passed - b.year;
  return last > next ? -1 : 1
})
console.table(oldest)

/*-------------------------------------------------------------------------------------*/
